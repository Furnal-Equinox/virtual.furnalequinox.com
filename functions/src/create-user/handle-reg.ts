import {
  APIGatewayProxyResultV2,
  Context
} from 'aws-lambda'
import fetch from 'node-fetch'
import {
  NetlifyContext,
  Registrant,
  RegistrationPayload,
  User
} from './types'

/**
 * Creates user objects from the registrant data in the payload.
 * Note: Our RegFox form requires registrants to give a valid email address.
 * Therefore, I can assume here that an `email` field does exist on the registrant data.
 * @param {Registrant[]} registrants - an array of registrant objects from the payload.
 * @returns {User[]} users - an array of user objects ready to be created. 
 */
const createUsersFromPayload = (registrants: Registrant[]): User[] =>
  registrants.map(({ data }: Registrant) =>
    ({ email: data.find(o => o.key === 'email')?.value as string }))

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
  context: Context,
): Promise<APIGatewayProxyResultV2> => {
  // Netlify puts the identity instance on the clientContext object.
  // This object does not exist on AWS's Context type, so I'm ignoring it here.
  const { identity }: NetlifyContext = context.clientContext as unknown as NetlifyContext
  const inviteUrl = `${identity.url}/invite`
  const adminAuthHeader = `Bearer ${identity.token}`

  // Convert the payload into a list of users.
  const users: User[] = createUsersFromPayload(registrants)

  // Attempt to invite every user in the list.
  // Keep track of how many have been signed up and report that number in the response.
  let numInvited: number = 0

  await Promise.all(
    users.map(
      async ({ email }: User) => {
        await fetch(inviteUrl, {
          method: 'POST',
          headers: { Authorization: adminAuthHeader },
          body: JSON.stringify({ email: email})
        })
        .then(() => {
          numInvited += 1 
        }).catch(err => {
          throw err
        })
      }
    )
  )

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true, message: `${numInvited} user(s) invited!` })
  }
}

export default handleRegistration
