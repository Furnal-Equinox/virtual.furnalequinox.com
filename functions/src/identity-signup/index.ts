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
  }

  const payload: Payload = JSON.parse(event.body)

  const roles: string[] = ['free']

  const q = faunadb.query

  const faunaClient = new faunadb.Client({
    secret: process.env.FAUNA_SERVER_KEY as string
  })

  const doesUserExist: boolean = await faunaClient.query(
    q.Exists(q.Match(q.Index('getDonationByEmail'), payload?.user.email ?? ''))
  )

  if (doesUserExist) {
    const document = await faunaClient.query<faunadb.values.Document<User>>(
      q.Get(q.Match(q.Index('getDonationByEmail'), payload?.user.email ?? ''))
    )

    if (document.data.donationAmount > 0) {
      roles.push('donor')
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      app_metadata: {
        roles: roles
      }
    })
  }
}
