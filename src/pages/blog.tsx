import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import config from '../../site-config'

interface Props {
  data: BlogQueryQuery
  location: Location
}

const Blog: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Meta customDescription='Blog posts' />
      <div>
      </div>
    </Layout>
  )
}

export default Blog

export const blogQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`