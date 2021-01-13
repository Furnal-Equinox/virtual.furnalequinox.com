import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import Button from '../components/button/button'
import Layout from '../layouts/layout/layout'
import { LoginCard } from '../components/cards'
import Meta from '../components/meta/meta'

import { useIdentityContext } from 'react-netlify-identity-gotrue'
import 'react-netlify-identity-widget/styles.css'
import LoginForm from '../components/login-form/login-form'

interface Props extends RouteComponentProps {}

const Login: React.FC<Props> = ({ location }: Props) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  const isLoggedIn = identity.isLoggedIn

  const manageSubscription = () => {
    fetch('/.netlify/functions/create-manage-link', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${identity.user?.token.access_token}`
      }
    })
      .then(async (res) => await res.json())
      .then((link) => {
        window.location.href = link
      })
      .catch((err) => console.error(err))
  }

  return (
    <Layout location={location}>
      <Helmet title={`Login | ${config.siteTitle}`} />
      <Meta />
      <LoginCard>
        <h1 className='card-title'>Welcome!</h1>
        <div>
          <LoginForm navigateTarget='/login'/>
        </div>
      </LoginCard> 
      {/* <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} /> */}
    </Layout>
  )
}

export default Login
