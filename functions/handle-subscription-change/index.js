const crpyto = require('crypto')
const GoTrue = require('gotrue-js')


const auth = new GoTrue({
  APIUrl: 'https://virtual-furnal-equinox.netlify.app/.netlify/identity',
  audience: '',
  setCookie: false,
})

const sigHeaderName = 'X-Webconnex-Signature'

const verifyData = (req, res, next) => {
  const payload = JSON.stringify(req.body)

  if (!payload) {
    return next('Request body is empty!')
  }

  const sig = req.get(sigHeaderName) || ''

  const hmac = crypto.createHmac('sha256', process.env.REGFOX_WEBHOOK_SECRET)

  const digest = Buffer.from('sha256=' + hmac.update(payload).digest('hex'), 'utf8')
  
  const checksum = Buffer.from(sig, 'utf8')

  if (checksum.length !== digest.length || !crypto.timingSafeEqual(digest, checksum)) {
    return next(`Request body digest (${digest}) did not match ${sigHeaderName} (${checksum})`)
  }
  return next()
}

const handler = async (event, context) => {
  const { headers, body } = event

  try {


    const { netlifyID } = result.data.getUserByStripeID

    // take the first word of the plan name and use it as the role
    const plan = subscription.items.data[0].plan.nickname
    const role = plan.split(' ')[0].toLowerCase()

    // send a call to the Netlify Identity admin API to update the user role
    const { identity } = context.clientContext
    await fetch(`${identity.url}/admin/users/${netlifyID}`, {
      method: 'PUT',
      headers: {
        // note that this is a special admin token for the Identity API
        Authorization: `Bearer ${identity.token}`
      },
      body: JSON.stringify({
        app_metadata: {
          roles: [role]
        }
      })
    })

    await auth
      .signup(email, password)

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true })
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`
    }
  }
}

module.exports = {
  handler
}
