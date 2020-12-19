import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Img, { FluidObject } from 'gatsby-image'
import { GalleryQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'

interface Props {
  data: GalleryQueryQuery
  location: Location
}

const Gallery: React.FC<Props> = ({ data, location }: Props) => {
  const artworks = data.remark.artworks
  
  return (
    <Layout location={location}>
      <Helmet title={`Gallery | ${config.siteTitle}`} />
      <Meta customDescription='Art Gallery' />
      <div>
        <section className='container text-center py-3 py-lg-5'>
          <div className='row'>
            {artworks.map(({ artwork }) => (
              artwork.frontmatter?.image?.childImageSharp?.fluid &&
              <div className='col-lg-12'>
                <Img
                  fluid={artwork.frontmatter?.image?.childImageSharp?.fluid as FluidObject}
                  style={{ display: 'block', margin: '0 auto' }}
                  className='rounded-3'
                />
                <h2>{`"${artwork.frontmatter?.title}" by ${artwork.frontmatter?.artist}`}</h2>
                <a 
                  href={artwork.frontmatter?.url ?? ''} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='btn btn-primary'
                >
                  Check them out here!
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Gallery

export const galleryQuery = graphql`
  query GalleryQuery {
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
