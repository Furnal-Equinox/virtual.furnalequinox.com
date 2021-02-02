export interface Payload {
  eventType: 'registration' | 'ping'
  accountId: number
  formId: number
  customerId: number
  eventId: number
  data: PingPayload | RegistrationPayload
  meta: {
    appKey: string
    name: string
  }
  formMeta?: any
}

export interface PingPayload {
  note: string
}

export interface RegistrationPayload {
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
  registrants: Registrant[]
  registrationTimestamp: string
  total: number
  transactionId: number
  transactionReference: string
  note: string
}

export interface Registrant {
  amount: number
  id: string
  lookupId: string
  data: Array<RegistrationOptions | Email | DOB>
}

export interface RegistrationOptions {
  key: 'registrationOptions'
  label: 'Ticket Type'
  type: 'regOptions'
  value: 'free' | 'pro' | 'super'
}

export interface Email {
  key: 'email'
  label: 'Email'
  type: 'email'
  value: string
}

export interface DOB {
  key: 'dateOfBirth'
  label: 'Date of Birth'
  type: 'birthDate'
  value: string
}

export interface User {
  email: string
}

export interface NetlifyContext {
  identity: {
    url: string
    token: string
  }
}