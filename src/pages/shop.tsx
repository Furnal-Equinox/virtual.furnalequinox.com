import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import { ShopQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'

interface Props {
  data: ShopQueryQuery
  location: Location
}

const Shop: React.FC<Props> = ({ data, location }: Props) => {
  const meta = data.site?.meta
  
  return (
    <Layout location={location}>
      <Helmet title={`Shop | ${config.siteTitle}`} />
      <Meta />
      <div>
      </div>
    </Layout>
  )
}

export default Shop

export const shopQuery = graphql`
  query ShopQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`