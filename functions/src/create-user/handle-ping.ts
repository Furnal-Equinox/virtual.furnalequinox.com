import { APIGatewayProxyResultV2, Context } from 'aws-lambda'
import { PingPayload } from './types'

const handlePing = async (
  { note }: PingPayload, 
  context: Context
): Promise<APIGatewayProxyResultV2> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ received: true, message: 'Pong!' })
  }
}

export default handlePing