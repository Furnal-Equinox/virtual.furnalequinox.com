import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import Button from '../components/button/button'
import Layout from '../layouts/layout/layout'
import { LoginCard } from '../components/cards'
import Meta from '../components/meta/meta'

import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css'

interface Props extends RouteComponentProps {}

const Login: React.FC<Props> = ({ location }: Props) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  const isLoggedIn = identity.isLoggedIn

  const manageSubscription = () => {
    fetch('/.netlify/functions/create-manage-link', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${identity.user?.token.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((link) => {
        window.location.href = link;
      })
      .catch((err) => console.error(err));
  }

  return (
    <Layout location={location}>
      <Helmet title={`Login | ${config.siteTitle}`} />
      <Meta />
      <LoginCard>
        <h1 className='card-title'>Welcome!</h1>
        <p className='h2'>
          Please sign up or log in to continue.
        </p>
        <p className='info'>
          Note: this button opens a modal for both logging in and signing up.
        </p>
        <div style={{ width: '10rem' }}>
          {!isLoggedIn
            ? <Button 
              label={'Log in or sign up'}
              isFullwidth 
              onClick={() => setDialog(true)} 
            />
            : <>
              <Button
                label={'Logout'}
                isFullwidth
                onClick={() => identity.logoutUser()}
              />
              <Button 
                label={'Manage Subscription'}
                isFullwidth
                onClick={() => manageSubscription()}
              />
            </>
          }
        </div>
      </LoginCard> 
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
    </Layout>
  )
}

export default Login
