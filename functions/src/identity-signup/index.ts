import { APIGatewayProxyHandlerV2 } from 'aws-lambda'

interface Payload {
  user: {
    email: string
    user_metadata: {
      isAdult: boolean
    }
  }
}

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  const payload: Payload = JSON.parse(event.body as string)

  const { user } = payload

  const roles = user.user_metadata.isAdult ? ['free', 'adult'] : ['free']

  const responseBody = {
    app_metadata: {
      roles: roles
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  }
}