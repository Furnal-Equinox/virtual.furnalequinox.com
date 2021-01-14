import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import Button from '../components/button/button'
import Layout from '../layouts/layout/layout'
import { LoginCard } from '../components/cards'
import Meta from '../components/meta/meta'
import SignUpForm from '../components/signup-form/signup-form'

interface Props extends RouteComponentProps {}

const SignUp: React.FC<Props> = ({ location }: Props) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  const isLoggedIn = identity.isLoggedIn

  return (
    <Layout location={location}>
      <Helmet title={`Sign Up | ${config.siteTitle}`} />
      <Meta />
      <LoginCard>
        <h1 className='card-title'>Welcome!</h1>
        <div>
          <SignUpForm />
        </div>
      </LoginCard>
    </Layout>
  )
}

export default SignUp
