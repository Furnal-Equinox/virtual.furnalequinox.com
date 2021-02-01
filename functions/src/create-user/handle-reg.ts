import {
  APIGatewayProxyResultV2,
  Context
} from 'aws-lambda'
import { differenceInYears } from 'date-fns'
import fetch from 'node-fetch'
import GoTrue from 'gotrue-js'
import Password from 'secure-random-password'
import {
  Registrant,
  RegistrationPayload,
  Role,
  User
} from './types'

const createUsersFromPayload = (registrants: Registrant[]): User[] => (
  registrants.map(({ data }: Registrant) => {
    const email: string | undefined = data.find(o => o.key === 'email')?.value
    const ticketType: string | undefined = data.find(o => o.key === 'registrationOptions')?.value
    const dob: string | undefined = data.find(o => o.key === 'dateOfBirth')?.value

    const password: string = Password.randomPassword({
      characters: [Password.lower, Password.upper, Password.digits],
      length: 16
    })

    const roles: Role[] = []

    if (ticketType === undefined || email === undefined || dob === undefined) {
      throw new Error('User has invalid ticket type and/or DOB!')
    } else {
      const DOB = new Date(dob)

      if (differenceInYears(new Date('2021-03-19'), DOB) >= 18) {
        roles.push('adult')
      }

      roles.push(ticketType as Role)
    }

    return {
      email: email,
      password: password,
      roles: roles
    }
  })
)

const signupUser = async (usersUrl: string, adminAuthHeader: string, auth: GoTrue, { email, password, roles }: User): Promise<void> => {
  await fetch(usersUrl, {
    method: 'POST',
    headers: { Authorization: adminAuthHeader },
    body: JSON.stringify({ email: email, password: password, app_metadata: { roles: roles }, confirm: true })
  })
}

const handleRegistration = async (
  { registrants }: RegistrationPayload,
  context: Context,
  goTrueInstance: GoTrue
): Promise<APIGatewayProxyResultV2> => {
  const { identity }: any = context.clientContext
  const usersUrl = `${identity.url as string}/admin/users`
  const adminAuthHeader = `Bearer ${identity.token as string}`

  // Convert the payload into a list of users.
  const users: User[] = createUsersFromPayload(registrants)

  // Attempt to sign up every user in the list.
  await Promise.all(
    users.map(
      async user => await signupUser(usersUrl, adminAuthHeader, goTrueInstance, user)
    )
  )

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true })
  }
}

export default handleRegistration
