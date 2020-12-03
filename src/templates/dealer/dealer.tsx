import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'
import { Helmet } from 'react-helmet'

import Button from '../../components/button/button'
import Badge from '../../components/badge/badge'

import './style.scss'
import Layout from '../../components/layout/layout'
import Meta from '../../components/meta/meta'

import config from '../../../site-config'

import { DealerBySlugQuery } from '../../../types/graphql-types'



interface Props {
  data: DealerBySlugQuery
  location: Location
}

const Dealer: React.FC<Props> = ({ data, location }: Props) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter
  const banner = post?.banner ?? null

  return (
    <Layout location={location}>
      <Helmet>
            <title>{`${post?.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <Meta
        postPath={postNode?.fields?.slug}
        postNode={postNode}
        postSEO
      />
      <div className='article' key={postNode?.fields?.slug}>
        <h1>{post?.dealer}</h1>
      </div>
      <div className='content'>
        {banner?.childImageSharp?.fluid && (
          <Img
            fluid={banner.childImageSharp.fluid as FluidObject}
            style={{ display: 'block', margin: '0 auto' }}
          />
        )}
      </div>
    </Layout>
  )
}

export const dealerQuery = graphql`
  query DealerBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        dealer
        description
        url
        banner {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Dealer
