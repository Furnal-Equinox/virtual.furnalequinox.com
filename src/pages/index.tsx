import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import { IndexQueryQuery } from '../../types/graphql-types'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import config from '../../site-config'

import './index.scss'

interface Props {
  data: IndexQueryQuery
  location: Location
}

const BlogIndex: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Meta />
      <div className='container text-center'>
        <h1>Please pardon the mess! We're working on making this website as awesome as possible!</h1>
      </div>
      <div className='d-flex h-100 text-center text-white bg-image'>
        <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column'>
          <div className='px-3'>
            <h1>Cover your page.</h1>
            <p className='lead'>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          </div>
        </div>
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
