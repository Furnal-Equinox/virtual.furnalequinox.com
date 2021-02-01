import {
  APIGatewayProxyResultV2,
  Context
} from 'aws-lambda'
import { differenceInYears } from 'date-fns'
import fetch from 'node-fetch'
import Password from 'secure-random-password'
import {
  Registrant,
  RegistrationPayload,
  User
} from './types'

const createUsersFromPayload = (registrants: Registrant[]): User[] => (
  registrants.map(({ data }: Registrant) => {
    const email: string | undefined = data.find(o => o.key === 'email')?.value
    const ticketType: string | undefined = data.find(o => o.key === 'registrationOptions')?.value
    const dob: string | undefined = data.find(o => o.key === 'dateOfBirth')?.value

    if (ticketType === undefined || email === undefined || dob === undefined) {
      throw new Error('User has invalid ticket type, email, and/or DOB!')
    }

    const password: string = Password.randomPassword({
      characters: [Password.lower, Password.upper, Password.digits],
      length: 16
    })

    const DOB = new Date(dob)

    const isAdult: boolean = differenceInYears(new Date('2021-03-19'), DOB) >= 18

    return {
      email: email,
      password: password,
      isAdult: isAdult
    }
  })
)

const signupUser = async (
  usersUrl: string, 
  adminAuthHeader: string,
  { email, password, isAdult }: User
): Promise<void> => {
  const postBody = { 
    email: email,
    password: password,
    user_metadata: { 
      isAdult: isAdult
    }, 
    confirm: true 
  }
  
  await fetch(usersUrl, {
    method: 'POST',
    headers: { Authorization: adminAuthHeader },
    body: JSON.stringify(postBody)
  })
}

const handleRegistration = async (
  { registrants }: RegistrationPayload,
  context: Context,
): Promise<APIGatewayProxyResultV2> => {
  const { identity }: any = context.clientContext
  const usersUrl = `${identity.url as string}/admin/users`
  const adminAuthHeader = `Bearer ${identity.token as string}`

  // Convert the payload into a list of users.
  const users: User[] = createUsersFromPayload(registrants)

  // Attempt to sign up every user in the list.
  await Promise.all(
    users.map(
      async user => await signupUser(usersUrl, adminAuthHeader, user)
    )
  )

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true })
  }
}

export default handleRegistration
