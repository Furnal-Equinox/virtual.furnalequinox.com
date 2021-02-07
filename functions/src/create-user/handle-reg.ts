import {
  APIGatewayProxyResultV2,
  Context
} from 'aws-lambda'
import * as faunadb from 'faunadb'
import fetch from 'node-fetch'
import {
  DiscordHandle,
  DonationAmount,
  Email,
  FurName,
  NetlifyContext,
  Registrant,
  RegistrantData,
  RegistrationPayload,
  User
} from './types'

/**
 * Checks that the expected fields exist on the payload.
 * @param {Registrant[]} registrants - payload to check
 */
const doesPayloadHaveExpectedFields = (registrants: Registrant[]): boolean => {
  const data = registrants[0].data
  return (
    data.find(o => o.key === 'furName') !== undefined &&
    data.find(o => o.key === 'email') !== undefined &&
    data.find(o => o.key === 'discordHandle') !== undefined &&
    data.find(o => o.key === 'donationAmount') !== undefined
  )
}

/**
 * Creates user objects from the registrant data in the payload.
 * Note: Our RegFox form requires registrants to give a valid email address.
 * Therefore, I can assume here that an `email` field does exist on the registrant data.
 * @param {Registrant[]} registrants - an array of registrant objects from the payload.
 * @returns {User[]} users - an array of user objects ready to be created.
 */
const createUsersFromPayload = (registrants: Registrant[]): User[] =>
  registrants.map(({ data }: Registrant) => ({
    furName: getFurNameFromRegistrant(data),
    email: getEmailFromRegistrant(data),
    donationAmount: getDonationAmountFromRegistrant(data),
    discordHandle: getDiscordHandleFromRegistrant(data)
  }))

const getFurNameFromRegistrant = (data: RegistrantData): string => {
  const furName: FurName = data.find(o => o.key === 'furName') as FurName
  return furName.value
}

const getEmailFromRegistrant = (data: RegistrantData): string => {
  const email: Email = data.find(o => o.key === 'email') as Email
  return email.value
}

const getDiscordHandleFromRegistrant = (data: RegistrantData): string | null => {
  const discordHandle: DiscordHandle = data.find(o => o.key === 'discordHandle') as DiscordHandle
  return discordHandle.value !== '' ? discordHandle.value : null
}

const getDonationAmountFromRegistrant = (data: RegistrantData): number => {
  const donationAmount: DonationAmount = data.find(o => o.key === 'donationAmount') as DonationAmount
  return donationAmount.repeater
    .map(o => parseInt(o.amount.value))
    .reduce((acc, curr) => acc + curr)
}

/**
 * Handle the registration event. Extract users from the RegFox registration payload
 * and attempt to invite them.
 * @param {RegistrationPayload} payload - the payload for the event
 * @param {Context} context - the context of the Netlify Function
 * @return {APIGatewayProxyResultV2} result - Returns `{ statusCode: 200, body:
 *  JSON.stringify({ received: true, message: `${numInvited} user(s) invited!` }) }` if no errors are thrown
 * @throws {Error} error - if creating a user fails or if signing them up fails,
 *  this function will throw an error with an attached message.
 */
const handleRegistration = async (
  { registrants }: RegistrationPayload,
  context: Context
): Promise<APIGatewayProxyResultV2> => {
  // Check that the payload has the expected fields.
  if (!doesPayloadHaveExpectedFields(registrants)) {
    throw new Error('Payload does not have expected fields! Please verify that the form has the expected fields.')
  }

  // Netlify puts the identity instance on the clientContext object.
  // This object does not exist on AWS's Context type, so I'm ignoring it here.
  const { identity }: NetlifyContext = context.clientContext as unknown as NetlifyContext
  const inviteUrl = `${identity.url}/invite`
  const adminAuthHeader = `Bearer ${identity.token}`

  const q = faunadb.query

  const faunaClient = new faunadb.Client({
    secret: process.env.FAUNA_SERVER_KEY as string
  })

  // Convert the payload into a list of users.
  const users: User[] = createUsersFromPayload(registrants)

  // Add each user to the Fauna database.
  await Promise.all(
    users.map(
      async ({ furName, discordHandle, email, donationAmount }: User): Promise<void> => {
        const doesUserExist: boolean = await faunaClient.query(
          q.Exists(q.Match(q.Index('getDonationByFurName'), furName))
        )

        if (!doesUserExist) {
          await faunaClient.query(
            q.Create(q.Collection('Donation'), {
              data: {
                furName: furName,
                email: email,
                discordHandle: discordHandle,
                donationAmount: 0
              }
            })
          )
        }

        const document = await faunaClient.query<faunadb.values.Document<User>>(
          q.Get(q.Match(q.Index('getDonationByFurName'), furName))
        )

        await faunaClient.query(
          q.Update(document.ref, {
            data: {
              donationAmount: document.data.donationAmount + donationAmount
            }
          })
        )
      }
    )
  )

  // Attempt to invite every user in the list.
  // Keep track of how many have been signed up and report that number in the response.
  let numInvited: number = 0

  await Promise.all(
    users.map(
      async ({ email }: User) => {
        await fetch(inviteUrl, {
          method: 'POST',
          headers: { Authorization: adminAuthHeader },
          body: JSON.stringify({ email: email })
        })
        .then(async (_res) => {
          numInvited += 1
        })
        .catch((err) => console.error(JSON.stringify(err, null, 2)))
      }
    )
  )

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true, message: `${numInvited} user(s) invited!` })
  }
}

export default handleRegistration
