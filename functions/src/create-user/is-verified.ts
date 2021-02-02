import { APIGatewayProxyEventV2 } from 'aws-lambda'
import Crypto from 'crypto'
import { Headers } from 'node-fetch'

/**
 * Verify the incoming data.
 * @param {APIGatewayProxyEventV2} event - the HTTP event, destructured into its headers and body. 
 * @param {string} signatureHeaderName - the X-header that holds the payload's signature.
 * @returns {boolean} true if the data is verified, false otherwise.
 */
const isVerified = (
  { headers, body }: APIGatewayProxyEventV2,
  signatureHeaderName: string
): boolean => {
  // If there are no headers, bail out.
  if (headers === undefined || headers === null) {
    throw new Error('Headers are empty!')
  }

  // If the body is empty, bail out.
  if (body === undefined || body === null || body === '') {
    throw new Error('Request body is empty!')
  }

  // Convert AWS's headers into the standard Headers object.
  const headersRec = new Headers(headers as Record<string, string>)

  // Extract the payload's signature.
  const sig: string = headersRec.get(signatureHeaderName) ?? ''

  // Build an HMAC from our webhook secret.
  const hmac: Crypto.Hmac = Crypto.createHmac(
    'sha256', process.env.REGFOX_WEBHOOK_SECRET as string
  )

  // Build a digest from our HMAC.
  const digest: Buffer = Buffer.from(
    hmac.update(body).digest('hex'), 'utf-8'
  )

  const checksum: Buffer = Buffer.from(sig, 'utf-8')

  // Check if the checksum and the digest match.
  // Do a quick check on their lengths, and then a time-constrained eqaulity test.
  if (checksum.length !== digest.length || !Crypto.timingSafeEqual(digest, checksum)) {
    throw new Error(
      `Request body digest [${digest.toString('utf-8')}] did not match ${signatureHeaderName} [${checksum.toString('utf-8')}]`
    )
  }

  // If no errors are thrown, then the payload is fine.
  return true
}

export default isVerified
