import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'

import Button from '../../components/button/button'
import Badge from '../../components/badge/badge'

import './style.scss'
import Layout from '../../components/layout/layout'
import Meta from '../../components/meta/meta'
import { DealerBySlugQuery } from '../../../types/graphql-types'


interface Props {
  data: DealerBySlugQuery
}

const Dealer: React.FC<Props> = ({ data }: Props) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter
  const banner = post?.banner ?? null

  return (
    <Layout location={location}>
    <div className='article' key={postNode.slug}>
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
