import { graphql } from 'gatsby'
import React from 'react'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Img, { FluidObject } from 'gatsby-image'
import { GalleryQueryQuery } from '../../types/graphql-types'

interface Props {
  data: GalleryQueryQuery
  location: Location
}

const Gallery: React.FC<Props> = ({ data, location }: Props) => {
  const artworks = data.remark.artworks
  const meta = data.site?.meta
  
  return (
    <Layout location={location}>
      <Meta site={meta} />
      <div>
        {artworks.map(artwork => (
          artwork.artwork.frontmatter?.image?.childImageSharp?.fluid &&
          <Img
            fluid={artwork.artwork.frontmatter?.image?.childImageSharp?.fluid as FluidObject}
            style={{ display: 'block', margin: '0 auto' }}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Gallery

export const galleryQuery = graphql`
  query GalleryQuery {
    site {
      meta: siteMetadata {
        title
        author {
          name
        }
        description
        siteUrl
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: DESC }
      filter: { frontmatter: { layout: { eq: "image" } } }
    ) {
      artworks: edges {
        artwork: node {
          id
          frontmatter {
            title
            artist
            url
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
