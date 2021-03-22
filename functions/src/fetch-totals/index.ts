import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { getTotals } from '../utils/api'

export const handler: APIGatewayProxyHandlerV2 = async () => {
  try {
    const totals = await getTotals()

    return {
      statusCode: 200,
      body: JSON.stringify(
        totals !== null
          ? totals.amountDonated
          : null
      )
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
