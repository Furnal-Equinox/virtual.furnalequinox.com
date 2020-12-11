import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import config from '../../site-config'
import { AdultQueryQuery } from '../../types/graphql-types'

interface Props {
  data: AdultQueryQuery
  location: Location
}

const Adult: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Adult | ${config.siteTitle}`} />
      <Meta customDescription='Adults-only section' />
      <div>
        <div className='container text-center'>
          <h1>Please pardon the mess! We're working on making this website as awesome as possible!</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Adult

export const adultQuery = graphql`
  query AdultQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
