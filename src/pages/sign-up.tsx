import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import Layout from '../layouts/layout'
import { LoginCard } from '../components/cards'
import Meta from '../components/meta'
import SignUpForm from '../components/signup-form'

interface Props extends RouteComponentProps {}

const SignUp: React.FC<Props> = ({ location }: Props) => {
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
