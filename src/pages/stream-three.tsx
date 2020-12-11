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
  return (
    <Layout location={location}>
      <Helmet title={`Stream 3 | ${config.siteTitle}`} />
      <Meta customDescription='Panel Stream Three'/>
      <div>
        <div className='container text-center'>
          <h1>Please pardon the mess! We're working on making this website as awesome as possible!</h1>
        </div>
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
