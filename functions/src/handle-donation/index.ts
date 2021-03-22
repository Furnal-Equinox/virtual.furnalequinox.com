import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import handlePing from '../utils/handle-ping'
import handleDonation from './handle-don'
import isVerified from '../utils/is-verified'
import {
  DonationPayload,
  Payload,
  PingPayload
} from '../utils/types'

const sigHeaderName = 'X-Webconnex-Signature'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  try {
    // Attempt to verify the data.
    // If verification fails, bail immediately.
    if (!isVerified(event, sigHeaderName, process.env.REGFOX_DONATION_WEBHOOK_SECRET as string)) {
      throw new Error('Request body was not signed or verification failed!')
    }

    // If verification passes, then body is not null or the empty string.
    const payload: Payload = JSON.parse(event.body as string)

    // Extract the event type and the event data.
    const { eventType, data } = payload

    if (eventType === 'ping') {
      return await handlePing(data as PingPayload, context)
    } else if (eventType === 'registration') {
      return await handleDonation(data as DonationPayload, context)
    } else {
      throw new Error('Unrecognized event type!')
    }
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred.'
      })
    }
  }
}
