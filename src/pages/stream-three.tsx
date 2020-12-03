import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import config from '../../site-config'

import { StreamThreeQueryQuery } from '../../types/graphql-types'

interface Props {
  data: StreamThreeQueryQuery
  location: Location
}

const StreamThree: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  
  return (
    <Layout location={location}>
      <Helmet title={`Stream 3 | ${config.siteTitle}`} />
      <Meta customDescription='Panel Stream Three'/>
      <div>
      </div>
    </Layout>
  )
}

export default StreamThree

export const streamThreeQuery = graphql`
  query StreamThreeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`