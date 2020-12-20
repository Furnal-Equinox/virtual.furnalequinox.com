import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout/layout'
import LoginCard from '../components/cards/login-card/login-card'
import Meta from '../components/meta/meta'

import { LoginQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget'
import 'react-netlify-identity-widget/styles.css'

interface Props {
  data: LoginQueryQuery
  location: Location
}

const Login: React.FC<Props> = ({ data, location }: Props) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const email = identity.user?.email ?? 'Unknown'

  const isLoggedIn = identity.isLoggedIn

  return (
    <Layout location={location}>
      <Helmet title={`Login | ${config.siteTitle}`} />
      <Meta />
      <LoginCard>
        <h1 className='card-title'>Welcome</h1>
        <p className='h2'>Please sign up or log in to continue.</p>
        <button className='btn btn-primary' onClick={() => setDialog(true)}>
          {isLoggedIn ? `You are logged in as ${email}` : 'Log in'}
        </button>
      </LoginCard> 
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
    </Layout>
  )
}

export default Login

export const loginQuery = graphql`
  query LoginQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
