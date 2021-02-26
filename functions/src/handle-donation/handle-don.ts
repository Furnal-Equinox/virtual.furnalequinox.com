import {
  APIGatewayProxyResultV2,
  Context
} from 'aws-lambda'
import * as faunadb from 'faunadb'
import {
  DiscordHandle,
  DonationAmount,
  DonationData,
  DonationPayload,
  Donor,
  FurName,
  Totals,
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
    donationData.find(o => o.key === 'donationAmount') !== undefined
  )
}

/**
 * Parses user objects from the registrant data in the payload.
 * Note: Our RegFox form requires registrants to give a valid email address.
 * Therefore, I can assume here that an `email` field does exist on the registrant data.
 * @param {Donation[]} donations - an array of donation objects from the payload.
 * @returns {User} user - a user object ready to be created.
 */
const parseUserFromPayload = (data: DonationPayload): User =>
  ({
    furName: getFurNameFromDonation(data.registrants[0].data),
    emailAddress: getEmailAddressFromDonation(data),
    amount: getDonationAmountFromRegistrant(data.registrants[0].data),
    discordHandle: getDiscordHandleFromDonation(data.registrants[0].data)
  })

const getFurNameFromDonation = (data: DonationData): string => {
  const furName: FurName = data.find(o => o.key === 'furName') as FurName
  return furName.value
}

const getEmailAddressFromDonation = (data: DonationPayload): string => {
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
    .map(o => o.amount !== undefined ? parseInt(o.amount.value) : 0)
    .reduce((acc, curr) => acc + curr)

  const coveredCCFee: boolean = donationAmount.repeater.every(o => 
    o.coverFee !== undefined ? o.coverFee.value : false
  )

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
  _context: Context
): Promise<APIGatewayProxyResultV2> => {
  // Check that the payload has the expected fields.
  if (!doesPayloadHaveExpectedFields(data)) {
    throw new Error(
      'Payload does not have expected fields! Please verify that the form has the expected fields.'
    )
  }

  const createOrMutateUserInDB = async (user: User): Promise<void> => {
    const { furName, emailAddress, discordHandle, amount } = user
    const q = faunadb.query

    const faunaClient = new faunadb.Client({
      secret: process.env.FAUNA_SERVER_KEY as string
    })

    const doesDonorExist: boolean = await faunaClient.query<boolean>(
      q.Exists(q.Match(q.Index('getDonorByFurName'), furName))
    )

    if (!doesDonorExist) {
      console.log('Donor does not exist! Creating donor now.')

      const donor: Donor = {
        furName: furName,
        emailAddress: emailAddress,
        discordHandle: discordHandle ?? null,
        hasDonated: amount > 0
      }

      await faunaClient.query(
        q.Create(q.Collection('Donor'), {
          data: donor
        })
      )

      console.log('Donor created in DB!')
    }

    console.log('Getting donor document.')

    const donorDocument = await faunaClient.query<faunadb.values.Document<Donor>>(
      q.Get(q.Match(q.Index('getDonorByFurName'), furName))
    )

    await faunaClient.query(
      q.Update(donorDocument.ref, {
        data: {
          hasDonated: amount > 0
        }
      })
    )

    console.log('Donor updated.')

    const doesDonationExist: boolean = await faunaClient.query<boolean>(
      q.Exists(q.Match(q.Index('getDonationByFurName'), furName))
    )

    if (!doesDonationExist) {
      console.log('Donation does not exist! Creating donation now.')

      const user: User = {
        furName: furName,
        emailAddress: emailAddress,
        discordHandle: discordHandle,
        amount: 0
      }

      await faunaClient.query(
        q.Create(q.Collection('Donation'), {
          data: user
        })
      )

      console.log('Donation created.')
    }

    console.log('Getting donation document.')

    const document = await faunaClient.query<faunadb.values.Document<User>>(
      q.Get(q.Match(q.Index('getDonationByFurName'), furName))
    )

    await faunaClient.query(
      q.Update(document.ref, {
        data: {
          amount: q.Add(
            q.Select(['data', 'amount'], q.Get(document.ref)),
            amount
          )
        }
      })
    )

    console.log('Donation updated.')
  }

  const createOrMutateTotalDonation = async ({ amount }: User): Promise<void> => {
    const q = faunadb.query

    const faunaClient = new faunadb.Client({
      secret: process.env.FAUNA_SERVER_KEY as string
    })

    const doesRecordExist: boolean = await faunaClient.query(
      q.Exists(q.Match(q.Index('getTotals')))
    )

    if (!doesRecordExist) {
      console.log('Totals record does not exist! Creating it now.')

      const totals: Totals = {
        numberOfDonors: 0,
        amountDonated: 0
      }

      await faunaClient.query(
        q.Create(q.Collection('Totals'), {
          data: totals
        })
      )

      console.log('Totals record created.')
    }

    if (amount > 0) {
      console.log('Getting totals record.')

      const document = await faunaClient.query<faunadb.values.Document<Totals>>(
        q.Get(q.Match(q.Index('getTotals')))
      )

      await faunaClient.query(
        q.Update(document.ref, {
          data: {
            numberOfDonors: q.Add(
              q.Select(['data', 'numberOfDonors'], q.Get(document.ref)),
              1
            ),
            amountDonated: q.Add(
              q.Select(['data', 'amountDonated'], q.Get(document.ref)),
              amount
            )
          }
        })
      )

      console.log('Totals record updated.')
    }
  }

  try {
    // Convert the payload into a list of users.

    console.log('Parsing user from payload...')

    const user: User = parseUserFromPayload(data)

    console.log('Done.')

    console.log('Creating or updating donor/donation in DB...')

    await createOrMutateUserInDB(user)

    console.log('Done.')

    console.log('Creating or updating totals record...')

    await createOrMutateTotalDonation(user)

    console.log('Done.')

    return {
      statusCode: 200,
      body: JSON.stringify({
        received: true,
        message: 'Donation registered in DB!'
      })
    }
  } catch (err: any) {
    console.error(err.message as string)

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred while trying to register a donation in the database.'
      })
    }
  }
}

export default handleDonation
