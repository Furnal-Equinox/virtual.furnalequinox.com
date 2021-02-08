import { APIGatewayProxyResultV2, Context } from 'aws-lambda'
import { PingPayload } from './types'

/**
 * Handle the ping event.
 * @param {PingPayload} payload - the payload for the event
 * @param {Context} context - the context of the Netlify Function
 * @return {APIGatewayProxyResultV2} result - A simple result with an HTTP 200 code
 *  and a JSON string containing `{ received: true, message: 'Pong!' }`
 */
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
