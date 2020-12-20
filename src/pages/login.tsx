import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout/layout'
import LoginCard from '../components/cards/login-card/login-card'
import Meta from '../components/meta/meta'

import { LoginQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'

interface Props {
  data: LoginQueryQuery
  location: Location
}

const Login: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Login | ${config.siteTitle}`} />
      <Meta />
      <LoginCard 
        titleOne='Welcome!'
        subtitleOne='Please sign up or log in to continue.'
        loginButtonText='Log in'
      />
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
