import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
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

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.GalleryQueryQuery
}

const Gallery: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const Content = makePrivateContent(GalleryContent)

  return (
    <Event location={location} navigate={navigate}>
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
            desc
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
      <Jumbotron
        title='Art Gallery'
        subtitle='Enjoy our virtual gallery!'
      />
      <Section isContainer>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 576: 1, 768: 2, 992: 2, 1200: 2 }}
        >
          <Masonry>
            {artworks.map(({ artwork }) => (
              artwork.frontmatter?.image?.childImageSharp?.fluid !== null &&
                <GalleryItemCard
                  title={artwork.frontmatter?.title}
                  artist={artwork.frontmatter?.artist}
                  image={artwork.frontmatter?.image?.childImageSharp?.fluid}
                  url={artwork.frontmatter?.url}
                  desc={artwork.frontmatter?.desc}
                />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Section>
    </>
  )
}
