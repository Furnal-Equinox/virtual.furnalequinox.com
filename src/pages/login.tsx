import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
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
      <div className='d-flex h-100 text-center'>
        <section className='d-flex w-100 h-100 p-3 mx-auto flex-column"'>
          <h1>Welcome to Virtual Furnal Equinox!</h1>
          <h2>Please sign up or login to continue.</h2>
          <p>We will destroy your credentials 1 to 2 weeks after Furnal Equinox.</p>
          <div className='d-grid'>
            <button className='btn btn-primary btn-lg rounded-pill'>
              Log in
            </button>
          </div>
        </section>
      </div>
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
