import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import Img, { FluidObject } from 'gatsby-image'
import { GalleryQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'
import GalleryItemCard from '../components/cards/gallery-item-card/gallery-item-card'

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
        <section className='container-fluid py-3 py-lg-5 bg-light text-center'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1>Art Gallery (Live Data)</h1>
            <p className='lead'>Check out all these cool art pieces!</p>
          </div>
        </section>
        <section className='container text-center py-3 py-lg-5'>
          <div className='row'>
            {artworks.map(({ artwork }) => (
              artwork.frontmatter?.image?.childImageSharp?.fluid &&
              <div className='col-lg-12'>
                <GalleryItemCard 
                  title={artwork.frontmatter?.title ?? ''}
                  artist={artwork.frontmatter?.artist ?? ''}
                  image={artwork.frontmatter?.image?.childImageSharp?.fluid?.src ?? ''}
                  url={artwork.frontmatter?.url ?? ''}
                />
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
