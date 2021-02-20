import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import * as faunadb from 'faunadb'
import { User } from '../utils/types'

interface Payload {
  user: {
    email: string
  }
}

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.body === undefined) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Event body is empty!'
      })
    }
  } else {
    try {
      const payload: Payload = JSON.parse(event.body)

      const q = faunadb.query

      const faunaClient = new faunadb.Client({
        secret: process.env.FAUNA_SERVER_KEY as string
      })

      const doesUserExist: boolean = await faunaClient.query(
        q.Exists(q.Match(q.Index('getDonationByEmailAddress'), payload?.user.email ?? ''))
      )

      if (doesUserExist) {
        const document = await faunaClient.query<faunadb.values.Document<User>>(
          q.Get(q.Match(q.Index('getDonationByEmailAddress'), payload?.user.email ?? ''))
        )

        return {
          statusCode: 200,
          body: JSON.stringify({
            user_metadata: {
              furName: document.data.furName
            },
            app_metadata: {
              roles: ['free']
            }
          })
        }
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify({
            user_metadata: {
              furName: 'unknown user'
            },
            app_metadata: {
              roles: ['free']
            }
          })
        }
      }
    } catch (err: any) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'An error occurred while signing up a user.'
        })
      }
    }
  }
}