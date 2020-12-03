import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import { IndexQueryQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import config from '../../site-config'

import BackgroundImage from '../../content/images/moritz-mentges-unsplash.jpg'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`About | ${config.siteTitle}`} />
      <Meta />
      <div>
        <section className='text-center'>
          <h1 className='p-5'>Bonjour, tout le monde !</h1>
        </section>
        <section>
          <div className='cover-image'>
            <img src={BackgroundImage}/>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
