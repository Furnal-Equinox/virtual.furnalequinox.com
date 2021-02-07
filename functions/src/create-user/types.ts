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
  billing: Billing
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
  formName: string
  transactionId: number
  transactionReference: string
  note: string
}

export interface Billing {
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

export interface Registrant {
  amount: number
  id: string
  lookupId: string
  data: RegistrantData
}

export type RegistrantData = Array<
    RegistrationOptions
  | Email
  | RealName
  | FurName
  | DonationAmount
  | DiscordHandle
>

export interface RegistrationOptions {
  key: 'registrationOptions'
  label: 'Ticket Type'
  type: 'regOptions'
  value: Exclude<Role, 'adult'>
}

export interface RealName {
  key: 'name'
  label: 'Name'
  type: 'name'
  first: {
    label: 'First Name'
    type: 'nameField'
    value: string
  }
  last: {
    label: 'Last Name'
    type: 'nameField'
    value: string
  }
}

export interface Email {
  key: 'email'
  label: 'Email'
  type: 'email'
  value: string
}

export interface FurName {
  key: 'furName'
  label: 'Fur Name'
  type: 'textField'
  value: string
}

export interface DiscordHandle {
  key: 'discordHandle'
  label: 'Discord Handle'
  type: 'textField'
  value: string
}

export interface DonationFields {
  key: '$donationFields'
  type: 'donationFields'
  amount: {
    label: 'Amount'
    type: 'amountField'
    value: string
  }
}

export interface DonationAmount {
  key: 'donationAmount'
  label: 'Donation Amount'
  type: 'donationBox'
  repeater: DonationFields[]
}

export interface User {
  discordHandle: string | null
  donationAmount: number
  email: string
  furName: string
}

export type Role = 'free' | 'basic' | 'pro' | 'super' | 'adult'

export interface NetlifyContext {
  identity: {
    url: string
    token: string
  }
}