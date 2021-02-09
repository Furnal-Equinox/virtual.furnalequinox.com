import {
  APIGatewayProxyResultV2,
  Context
} from 'aws-lambda'
import * as faunadb from 'faunadb'
import {
  ConvenienceFeeLineItem,
  DiscordHandle,
  Donation,
  DonationAmount,
  DonationData,
  DonationPayload,
  Email,
  FurName,
  TotalDonations,
  User
} from '../utils/types'

/**
 * Checks that the expected fields exist on the payload.
 * @param {Registrant[]} registrants - payload to check
 */
const doesPayloadHaveExpectedFields = (data: DonationPayload): boolean => {
  const donationData = data.registrants[0].data
  return (
    data.billing.email !== undefined &&
    donationData.find(o => o.key === 'furName') !== undefined &&
    donationData.find(o => o.key === 'discordHandle') !== undefined &&
    donationData.find(o => o.key === 'donationAmount') !== undefined &&
    donationData.find(o => o.key === 'lineItem' && o.label === 'Convenience Fee') !== undefined
  )
}

/**
 * Parses user objects from the registrant data in the payload.
 * Note: Our RegFox form requires registrants to give a valid email address.
 * Therefore, I can assume here that an `email` field does exist on the registrant data.
 * @param {Donation[]} donations - an array of donation objects from the payload.
 * @returns {User[]} users - an array of user objects ready to be created.
 */
const parseUserFromPayload = (data: DonationPayload): User =>
  ({
    furName: getFurNameFromDonation(data.registrants[0].data),
    email: getEmailFromDonation(data),
    donationAmount: getDonationAmountFromRegistrant(data.registrants[0].data),
    discordHandle: getDiscordHandleFromDonation(data.registrants[0].data)
  })

const getFurNameFromDonation = (data: DonationData): string => {
  const furName: FurName = data.find(o => o.key === 'furName') as FurName
  return furName.value
}

const getEmailFromDonation = (data: DonationPayload): string => {
  return data.billing.email
}

const getDiscordHandleFromDonation = (data: DonationData): string | null => {
  const discordHandle: DiscordHandle =
    data.find(o => o.key === 'discordHandle') as DiscordHandle
  return discordHandle.value !== '' ? discordHandle.value : null
}

const getDonationAmountFromRegistrant = (data: DonationData): number => {
  const donationAmount: DonationAmount =
    data.find(o => o.key === 'donationAmount') as DonationAmount

  const sumAmount: number = donationAmount.repeater
    .map(o => parseInt(o.amount.value))
    .reduce((acc, curr) => acc + curr)

  const coveredCCFee: boolean = donationAmount.repeater.every(o => o.coverFee.value)

  const trueAmount: number = coveredCCFee ? sumAmount : (sumAmount - (sumAmount * 0.03))

  return trueAmount
}

/**
 * Handle the registration event, which we are interpreting as a donation.
 * Examine the payload and create or update the donor's donation in the database.
 * @param {DonationPayload} payload - the payload for the event
 * @param {Context} context - the context of the Netlify Function
 * @return {APIGatewayProxyResultV2} result - Returns `{ statusCode: 200, body:
 *  JSON.stringify({ received: true, message: 'Database updated!' }) }`
 *  if no errors are thrown
 * @throws {Error} error
 */
const handleDonation = async (
  data: DonationPayload,
  context: Context
): Promise<APIGatewayProxyResultV2> => {
  // Check that the payload has the expected fields.
  if (!doesPayloadHaveExpectedFields(data)) {
    throw new Error(
      'Payload does not have expected fields! Please verify that the form has the expected fields.'
    )
  }

  const createOrMutateUserInDB = async (user: User): Promise<void> => {
    const { furName, email, discordHandle, donationAmount } = user
    const q = faunadb.query

    const faunaClient = new faunadb.Client({
      secret: process.env.FAUNA_SERVER_KEY as string
    })

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

  const createOrMutateTotalDonation = async (user: User): Promise<void> => {
    const { donationAmount } = user
    const q = faunadb.query

    const faunaClient = new faunadb.Client({
      secret: process.env.FAUNA_SERVER_KEY as string
    })

    const doesRecordExist: boolean = await faunaClient.query(
      q.Exists(q.Match(q.Index('getTotalDonation')))
    )

    if (!doesRecordExist) {
      await faunaClient.query(
        q.Create(q.Collection('TotalDonations'), {
          data: {
            numberOfDonors: 0,
            totalAmount: 0
          }
        })
      )
    }

    const document = await faunaClient.query<faunadb.values.Document<TotalDonations>>(
      q.Get(q.Match(q.Index('getTotalDonation')))
    )

    await faunaClient.query(
      q.Update(document.ref, {
        data: {
          numberOfDonors: document.data.numberOfDonors + 1,
          totalAmount: document.data.totalAmount + donationAmount
        }
      })
    )
  }

  // Convert the payload into a list of users.
  const user: User = parseUserFromPayload(data)

  await createOrMutateUserInDB(user)

  await createOrMutateTotalDonation(user)

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true, message: 'Donation registered in DB!' })
  }
}

export default handleDonation
