import { APIGatewayProxyHandlerV2, APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda'
import Crypto from 'crypto'
import { differenceInYears } from 'date-fns'
import GoTrue from 'gotrue-js'
import Password from 'secure-random-password'
import { Payload, Registrant, Role, User } from './types'

const auth = new GoTrue({
  APIUrl: 'https://virtual-furnal-equinox.netlify.app/.netlify/identity',
  audience: '',
  setCookie: false
})

const sigHeaderName = 'X-Webconnex-Signature'

const isVerified = (
  { headers, body }: APIGatewayProxyEventV2
): boolean => {
  if (body === undefined || body === null || body === '') {
    throw new Error('Request body is empty!')
  }

  const sig: string = headers[sigHeaderName] ?? ''

  const hmac: Crypto.Hmac = Crypto.createHmac(
    'sha256', process.env.REGFOX_WEBHOOK_SECRET as string
  )

  const digest: Buffer = Buffer.from(
    hmac.update(body).digest('hex'), 'utf-8'
  )

  const checksum: Buffer = Buffer.from(sig, 'utf-8')

  if (checksum.length !== digest.length || !Crypto.timingSafeEqual(digest, checksum)) {
    throw new Error(
      `Request body digest [${digest.toString('utf-8')}] did not match ${sigHeaderName} [${checksum.toString('utf-8')}]`
    )
  }

  // If no errors are thrown, then the payload is fine.
  return true
}

const createUsersFromPayload = ({ data }: Payload): User[] => (
  data.registrants.map(({ data }: Registrant) => {
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

const signupUser = async ({ email, password, roles }: User): Promise<void> => {
  await auth.signup(email, password, { app_metadata: { roles: roles } })
}

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    if (!isVerified(event)) {
      throw new Error('Request body was not signed or verification failed!')
    }

    // If verification passes, then body is not null or the empty string.
    const data: Payload = JSON.parse(event.body as string)

    // Convert the payload into a list of users.
    const users: User[] = createUsersFromPayload(data)

    // Attempt to sign up every user in the list.
    await Promise.all(users.map(async user => await signupUser(user)))

    // If everything worked, return 200.

    const ok: APIGatewayProxyResultV2 = {
      statusCode: 200,
      body: JSON.stringify({ received: true })
    }

    return ok
  } catch (err) {
    const notOk: APIGatewayProxyResultV2 = {
      statusCode: 400,
      body: `Webhook Error: ${err.message as string}`
    }

    return notOk
  }
}
