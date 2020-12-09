import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import config from '../../site-config'
import { StreamTwoQueryQuery } from '../../types/graphql-types'

interface Props {
  data: StreamTwoQueryQuery
  location: Location
}

const StreamTwo: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Stream 2 | ${config.siteTitle}`} />
      <Meta />
      <div>
      </div>
    </Layout>
  )
}

export default StreamTwo

export const streamTwoQuery = graphql`
  query StreamTwoQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
