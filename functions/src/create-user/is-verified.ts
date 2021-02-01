import { APIGatewayProxyEventV2 } from 'aws-lambda'
import Crypto from 'crypto'
import { Headers } from 'node-fetch'

const isVerified = (
  { headers, body }: APIGatewayProxyEventV2,
  signatureHeaderName: string
): boolean => {
  if (body === undefined || body === null || body === '') {
    throw new Error('Request body is empty!')
  }

  if (headers === undefined) {
    throw new Error('Headers are empty!')
  }

  const headersRec = new Headers(headers as Record<string, string>)

  const sig: string = headersRec.get(signatureHeaderName) ?? ''

  const hmac: Crypto.Hmac = Crypto.createHmac(
    'sha256', process.env.REGFOX_WEBHOOK_SECRET as string
  )

  const digest: Buffer = Buffer.from(
    hmac.update(body).digest('hex'), 'utf-8'
  )

  const checksum: Buffer = Buffer.from(sig, 'utf-8')

  if (checksum.length !== digest.length || !Crypto.timingSafeEqual(digest, checksum)) {
    throw new Error(
      `Request body digest [${digest.toString('utf-8')}] did not match ${signatureHeaderName} [${checksum.toString('utf-8')}]`
    )
  }

  // If no errors are thrown, then the payload is fine.
  return true
}

export default isVerified
