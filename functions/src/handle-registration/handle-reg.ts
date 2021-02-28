import {
  APIGatewayProxyResultV2,
  Context
} from 'aws-lambda'
import * as faunadb from 'faunadb'
import fetch from 'node-fetch'
import {
  DiscordHandle,
  DonationAmount,
  Donor,
  Email,
  FurName,
  NetlifyContext,
  Registrant,
  RegistrantData,
  RegistrationPayload,
  Totals,
  User
} from '../utils/types'

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
 * Parses user objects from the registrant data in the payload.
 * Note: Our RegFox form requires registrants to give a valid email address.
 * Therefore, I can assume here that an `email` field does exist on the registrant data.
 * @param {Registrant[]} registrants - an array of registrant objects from the payload.
 * @returns {User[]} users - an array of user objects ready to be created.
 */
const parseUsersFromPayload = (registrants: Registrant[]): User[] =>
  registrants.map(({ data }: Registrant) => ({
    furName: getFurNameFromRegistrant(data),
    emailAddress: getEmailAddressFromRegistrant(data),
    amount: getDonationAmountFromRegistrant(data),
    discordHandle: getDiscordHandleFromRegistrant(data)
  }))

const getFurNameFromRegistrant = (data: RegistrantData): string => {
  const furName: FurName = data.find(o => o.key === 'furName') as FurName
  return furName.value
}

const getEmailAddressFromRegistrant = (data: RegistrantData): string => {
  const emailAddress: Email = data.find(o => o.key === 'email') as Email
  return emailAddress.value
}

const getDiscordHandleFromRegistrant = (data: RegistrantData): string | null => {
  const discordHandle: DiscordHandle =
    data.find(o => o.key === 'discordHandle') as DiscordHandle
  return discordHandle.value !== '' ? discordHandle.value : null
}

const getDonationAmountFromRegistrant = (data: RegistrantData): number => {
  const donationAmount: DonationAmount =
    data.find(o => o.key === 'donationAmount') as DonationAmount

  const sumAmount: number = donationAmount.repeater
    .map(o => o.amount !== undefined ? parseInt(o.amount.value) : 0)
    .reduce((acc, curr) => acc + curr)

  const coveredCCFee: boolean = donationAmount.repeater.every(o =>
    o.coverFee !== undefined ? o.coverFee.value : false
  )

  const trueAmount: number = coveredCCFee ? sumAmount : (sumAmount - (sumAmount * 0.05))

  return trueAmount
}

/**
 * Handle the registration event. Extract users from the RegFox registration payload
 * and attempt to invite them.
 * @param {RegistrationPayload} payload - the payload for the event
 * @param {Context} context - the context of the Netlify Function
 * @return {APIGatewayProxyResultV2} result - Returns `{ statusCode: 200, body:
 *  JSON.stringify({ received: true, message: `${numInvited} user(s) invited!` }) }`
 *  if no errors are thrown
 * @throws {Error} error - if creating a user fails or if signing them up fails,
 *  this function will throw an error with an attached message.
 */
const handleRegistration = async (
  { registrants }: RegistrationPayload,
  context: Context
): Promise<APIGatewayProxyResultV2> => {
  // Check that the payload has the expected fields.
  if (!doesPayloadHaveExpectedFields(registrants)) {
    throw new Error(
      'Payload does not have expected fields! Please verify that the form has the expected fields.'
    )
  }

  const hasAlreadyDonated: boolean[] = []

  const inviteUsers = async (users: User[]): Promise<void> => {
    // Netlify puts the identity instance on the clientContext object.
    // This object does not exist on AWS's Context type, so I'm ignoring it here.
    const { identity }: NetlifyContext = context.clientContext as unknown as NetlifyContext
    const inviteUrl = `${identity.url}/invite`
    const adminAuthHeader = `Bearer ${identity.token}`

    await Promise.all(
      users.map(
        async ({ emailAddress }: User) => {
          console.log('Inviting user.')

          await fetch(inviteUrl, {
            method: 'POST',
            headers: { Authorization: adminAuthHeader },
            body: JSON.stringify({ email: emailAddress })
          })

          console.log('User invited!')
        }
      )
    )
  }

  const createOrMutateUsersInDB = async (users: User[]): Promise<void> => {
    const q = faunadb.query

    const faunaClient = new faunadb.Client({
      secret: process.env.FAUNA_SERVER_KEY as string
    })

    // Add each user to the Fauna database.
    await Promise.all(
      users.map(
        async ({ furName, discordHandle, emailAddress, amount }: User): Promise<void> => {
          const doesDonorExist: boolean = await faunaClient.query<boolean>(
            q.Exists(q.Match(q.Index('getDonorByEmailAddress'), emailAddress))
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

            console.log('Donor created.')
          } else {
            // The donor already exists in the DB.
            // Get their document to see if they have already donated.
            const donorDocument = await faunaClient.query<faunadb.values.Document<Donor>>(
              q.Get(q.Match(q.Index('getDonorByEmailAddress'), emailAddress))
            )
            
            // If the user has already donated (meaning that a record already exists for them,
            // and they have donated in the past), then do not increment the number of donors later.
            hasAlreadyDonated.push(donorDocument.data.hasDonated)
          }

          console.log('Getting donor document.')

          const donorDocument = await faunaClient.query<faunadb.values.Document<Donor>>(
            q.Get(q.Match(q.Index('getDonorByEmailAddress'), emailAddress))
          )

          await faunaClient.query(
            q.Update(donorDocument.ref, {
              data: {
                hasDonated: amount > 0
              }
            })
          )

          console.log('Donor updated.')

          const doesDonationExist: boolean = await faunaClient.query(
            q.Exists(q.Match(q.Index('getDonationByEmailAddress'), emailAddress))
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
            q.Get(q.Match(q.Index('getDonationByEmailAddress'), emailAddress))
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
      )
    )
  }

  const createOrMutateTotalDonation = async (users: User[], hasAlreadyDonated: boolean[]): Promise<void> => {
    const q = faunadb.query

    const faunaClient = new faunadb.Client({
      secret: process.env.FAUNA_SERVER_KEY as string
    })

    const doesRecordExist: boolean = await faunaClient.query<boolean>(
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

    for (let i = 0; i < users.length; i += 1) {
      if (!hasAlreadyDonated[i]) {
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
                users[i].amount
              )
            }
          })
        )
      } else {
        if (users[i].amount > 0) {
          console.log('Getting totals record.')

          const document = await faunaClient.query<faunadb.values.Document<Totals>>(
            q.Get(q.Match(q.Index('getTotals')))
          )

          await faunaClient.query(
            q.Update(document.ref, {
              data: {
                amountDonated: q.Add(
                  q.Select(['data', 'amountDonated'], q.Get(document.ref)),
                  users[i].amount
                )
              }
            })
          )
        }
      }
    }
  }

  try {
    // Convert the payload into a list of users.

    console.log('Parsing users from payload...')

    const users: User[] = parseUsersFromPayload(registrants)

    console.log('Done.')

    console.log('Creating or updating donors/donations in DB...')

    await createOrMutateUsersInDB(users)

    console.log('Done.')

    console.log('Creating or updating totals record...')

    await createOrMutateTotalDonation(users, hasAlreadyDonated)

    console.log('Done.')

    console.log('Inviting users now...')

    await inviteUsers(users)

    console.log('Done.')

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true, message: 'User(s) invited!' })
    }
  } catch (err: any) {
    console.error(err.message as string)

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred while trying to register a donation in the database and / or trying to invite a user.'
      })
    }
  }
}

export default handleRegistration
