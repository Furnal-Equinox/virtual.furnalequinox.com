import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import handlePing from '../utils/handle-ping'
import handleRegistration from './handle-reg'
import isVerified from '../utils/is-verified'
import {
  Payload,
  PingPayload,
  RegistrationPayload
} from '../utils/types'

const sigHeaderName = 'X-Webconnex-Signature'

export const handler: APIGatewayProxyHandlerV2 = async (event, context) => {
  try {
    // Attempt to verify the data.
    // If verification fails, bail immediately.
    if (!isVerified(event, sigHeaderName, process.env.REGFOX_REGISTRATION_WEBHOOK_SECRET as string)) {
      throw new Error('Request body was not signed or verification failed!')
    }

    // If verification passes, then body is not null or the empty string.
    const payload: Payload = JSON.parse(event.body as string)

    // Extract the event type and the event data.
    const { eventType, data } = payload

    if (eventType === 'ping') {
      return await handlePing(data as PingPayload, context)
    } else if (eventType === 'registration') {
      return await handleRegistration(data as RegistrationPayload, context)
    } else {
      throw new Error('Unrecognized event type!')
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message as string}`
    }
  }
}
