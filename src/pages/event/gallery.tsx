import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GalleryQueryQuery } from '../../../types/graphql-types'
import config from '../../../site-config'

import {
  GalleryItemCard,
  Jumbotron,
  Meta
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

interface Props extends RouteComponentProps {
  data: GalleryQueryQuery
}

const Gallery: React.FC<Props> = ({ data, location }: Props) => {
  const Content = makePrivateContent(GalleryContent)

  return (
    <Event location={location}>
      <Helmet title={`Gallery | ${config.siteTitle}`} />
      <Meta customDescription='Art Gallery' />
      <div>
        <Content
          data={data}
          location={location}
          callbackPath='/event/gallery/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
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
const GalleryContent: React.FC<Props> = ({ data, location }: Props) => {
  const artworks = data.remark.artworks

  return (
    <>
      <Jumbotron title='Art Gallery (Live Data)' subtitle='Check out these cool art pieces!' />
      <Section isContainer isTextCenter pos='last'>
        <div className='row'>
          {artworks.map(({ artwork }) => (
            artwork.frontmatter?.image?.childImageSharp?.fluid !== null &&
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
      </Section>
    </>
  )
}
