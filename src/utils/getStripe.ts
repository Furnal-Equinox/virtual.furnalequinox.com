// Lifted from https://github.com/gatsbyjs/gatsby/blob/master/examples/ecommerce-tutorial-with-stripe/src/utils/stripejs.js
// and modified with types

/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null> | undefined

const getStripe = (): Promise<Stripe | null> | undefined => {
  if (stripePromise !== undefined && process.env.GATSBY_STRIPE_PUBLISHABLE_KEY !== undefined) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

export default getStripe
