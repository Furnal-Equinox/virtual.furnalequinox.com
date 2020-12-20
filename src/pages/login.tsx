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
      <div className='card mx-auto my-auto' style={{ width: '22rem' }}>
        <div className='card-body'>
          <div className='d-flex flex-column justify-content-between align-items-center text-center'>
            <h1 className='card-title'>
              Welcome to<br />
              Virtual Furnal Equinox!
            </h1>
            <h2 className='card-subtitle'>Please sign up or login to continue.</h2>
            <p className='card-subtitle'>We will destroy your credentials 1 to 2 weeks after Furnal Equinox.</p>
            <button className='btn btn-primary btn-lg rounded-pill'>
              Log in
            </button>
          </div>
        </div>
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
