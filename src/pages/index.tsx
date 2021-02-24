import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import {
  LoginCard,
  LoginForm,
  Meta
} from '../components'

import { Layout } from '../layouts'


interface Props extends RouteComponentProps {}

interface LocationState {
  navigateTarget?: string
}

const Login: React.FC<Props> = ({ location }: Props) => {
  const navigateTarget: string = (location?.state as LocationState)?.navigateTarget ?? '/'

  return (
    <Layout location={location}>
      <Helmet title={`Login | ${config.siteTitle}`} />
      <Meta />
      <LoginCard>
        <h1 className='card-title'>Welcome!</h1>
        <div>
          <LoginForm navigateTarget={navigateTarget} />
        </div>
      </LoginCard>
    </Layout>
  )
}

export default Login
