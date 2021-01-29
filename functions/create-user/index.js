const Crypto = require('crypto')
const differenceInYears = require('date-fns/differenceInYears')
const GoTrue = require('gotrue-js')
const Password = require('secure-random-password')


const auth = new GoTrue({
  APIUrl: 'https://virtual-furnal-equinox.netlify.app/.netlify/identity',
  audience: '',
  setCookie: false,
})

const sigHeaderName = 'X-Webconnex-Signature'

const isVerified = (
  { headers, body } /* : APIGatewayProxyEvent */
) /* : boolean */ => {
  const payload = body

  if (payload === '') {
    console.error('Request body is empty!')
    return false
  }

  const sig /* : string  */ = headers.get(sigHeaderName) ?? ''

  const hmac /* : Crypto.Hmac */ = Crypto.createHmac(
    'sha256', process.env.REGFOX_WEBHOOK_SECRET /* as string */
  )

  const digest /* : Buffer */ = Buffer.from(
    hmac.update(payload).digest('hex'), 'utf-8'
  )

  const checksum /* : Buffer */ = Buffer.from(sig, 'utf-8')

  if (checksum.length !== digest.length || !Crypto.timingSafeEqual(digest, checksum)) {
    console.error(
      `Request body digest [${digest.toString('utf-8')}] did not match ${sigHeaderName} [${checksum.toString('utf-8')}]`
    )
    return false
  }

  return true
}

const createUsersFromPayload = ({ data } /* : Payload */) /* : Array<User> */ => (
  data.registrants.map(({ data }) => {
    const email /* : string | undefined */ = data.find(o => o.key === 'email')?.value
    const ticketType /* : string | undefined */ = data.find(o => o.key === 'registrationOptions')?.value
    const dob /* : string | undefined */ = data.find(o => o.key === 'dateOfBirth')?.value

    const password /* : string */ = Password.randomPassword({ 
      characters: [Password.lower, Password.upper, Password.digits],
      length: 16
    })

    let roles /* : Array<Roles> */ = []

    if (ticketType === undefined || email === undefined || dob === undefined) {
      throw new Error('User has invalid ticket type and/or DOB!')
    } else {
      const DOB = new Date(dob)
  
      if (differenceInYears(new Date('2021-03-19'), DOB) >= 18) {
        roles.push('adult')
      }
  
      roles.push(ticketType /* as Roles */)
    }
  
    return {
      email: email,
      password: password,
      roles: roles
    }
  })
)

const signupUser = async ({ email, password, roles} /* : User */) /* : Promise<void> */ => {
  auth.signup(email, password, { app_metadata: { roles: roles } })
}

const handler = async (event, _context) => {
  const { headers, body } = event

  try {
    if (!isVerified(headers, body)) {
      throw new Error('Request body was not signed or verification failed!')
    }

    const data = JSON.parse(body)

    const users = createUsersFromPayload(data)

    await Promise.all(users.map(user => signupUser(user)))

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true })
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`
    }
  }
}

module.exports = {
  handler
}

/*
export interface Payload {
  eventType: 'registration'
  accountId: number
  formId: number
  customerId: number
  eventId: number
  data: {
    billing: {
      address?: {
        city: string
        country: string
        postalCode: string
        state: string
        street1: string
      }
      card?: {
        cardNumber: string
        expMonth: number
        expYear: number
      }
      check?: {
        accountType: string
        accountNumber: string
        routingNumber: string
      }
      email: string
      name: {
        first: string
        last: string
      }
      paymentMethod?: string
      phone?: string
    }
    id: string
    lookupId: number
    customerId: number
    currency: string
    deductibleTotal: number
    orderNumber: string
    orderStatus: string
    registrants: Array<{
      amount: number
      id: string
      lookupId: string
      data: Array<RegistrationOptions | Email | DOB>
    }>
    registrationTimestamp: string
    total: number
    transactionId: number
    transactionReference: string
    note: string
  }
  meta: {
    appKey: string
    name: string
  }
  formMeta?: any
}

interface RegistrationOptions {
  key: 'registrationOptions'
  label: 'Ticket Type'
  type: 'regOptions'
  value: 'free' | 'pro' | 'super'
}

interface Email {
  key: 'email'
  label: 'Email'
  type: 'email'
  value: string
}

interface DOB {
  key: 'dateOfBirth',
  label: 'Date of Birth',
  type: 'birthDate',
  value: string
}

export type User = {
  email: string
  password: string
  roles: Array<Roles>
}

export type Roles = 'free' | 'pro' | 'super' | 'adult'
*/