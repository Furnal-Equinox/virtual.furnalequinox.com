const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { faunaFetch } = require('./utils/fauna')

const handler = async (_event, context) => {
  const { user } = context.clientContext;

  // create a new customer in Stripe
  const customer = await stripe.customers.create({ email: user.email })

  // subscribe the new customer to the free plan
  await stripe.subscriptions.create({
    customer: customer.id,
    items: [
      { 
        price: process.env.STRIPE_DEFAULT_PRICE_PLAN
      }
    ],
  })

  // store the Netlify and Stripe IDs in Fauna
  await faunaFetch({
    query: `
      mutation ($netlifyID: ID!, $stripeID: ID!) {
        createUser(data: { netlifyID: $netlifyID, stripeID: $stripeID }) {
          netlifyID
          stripeID
        }
      }
    `,
    variables: {
      netlifyID: user.id,
      stripeID: customer.id,
    },
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      app_metadata: {
        roles: ['free'],
      },
    }),
  }
}

module.exports = {
  handler
}