import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import Layout from '../layouts/layout'
import { LoginCard } from '../components/cards'
import Meta from '../components/meta'

import { useIdentityContext } from 'react-netlify-identity-gotrue'
import LoginForm from '../components/login-form'

interface Props extends RouteComponentProps {}

interface LocationState {
  navigateTarget?: string
}

const Login: React.FC<Props> = ({ location }: Props) => {
  const identity = useIdentityContext()
  const navigateTarget: string = (location?.state as LocationState)?.navigateTarget ?? '/'

  return (
    <Layout location={location}>
      <Helmet title={`Login | ${config.siteTitle}`} />
      <Meta />
      <LoginCard>
        <h1 className='card-title'>Welcome!</h1>
        <div>
          {identity.provisionalUser !== undefined
            ? <EmailConfirmation />
            : <LoginForm navigateTarget={navigateTarget} />}
        </div>
      </LoginCard>
    </Layout>
  )
}

export default Login

const EmailConfirmation: React.FC = () => {
  return (
    <>
      <p>
        You're almost there!
      </p>
      <p>
        Please check your email for an email from us and click the link!
      </p>
    </>
  )
}
