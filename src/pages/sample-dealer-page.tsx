import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { SampleDealerQuery } from '../../types/graphql-types'
import Img, { FluidObject } from 'gatsby-image'
import config from '../../site-config'
import '../templates/dealer/style.scss'

import {
  Anchor,
  Link,
  Meta,
  SocialLinks,
  TextCard
} from '../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../layouts'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

interface Props extends RouteComponentProps {
  data: SampleDealerQuery
  pageContext: {
    isSfw: boolean,
    slug: string,
    nextTitle: string,
    nextSlug: string,
    prevTitle: string,
    prevSlug: string
  }
}

const Dealer: React.FC<Props> = ({ data, location }: { data: SampleDealerQuery } & RouteComponentProps) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter

  return (
    <Event location={location}>
      <Helmet>
        <title>{`${post?.title ?? ''} | ${config.siteTitle}`}</title>
      </Helmet>
      <Meta
        postPath={postNode?.fields?.slug}
        postNode={postNode}
        postSEO
      />
      <div>
        <DealerContent
          data={data}
          location={location}
          pageContext={{
            isSfw: true,
            slug: 'sample-dealer',
            nextTitle: 'Sample Next',
            nextSlug: 'sample-next',
            prevTitle: 'Sample Prev',
            prevSlug: 'sample-prev'
          }}
        />
      </div>
    </Event>
  )
}

export const sampleDealerQuery = graphql`
  query SampleDealer {
    markdownRemark(fields: { slug: { eq: "/beast-within/" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        dealer
        description
        url
        social {
          deviantart
          facebook
          flickr
          furaffinity
          picarto
          twitter
          behance
          discord
          etsy
          github
          instagram
          pinterest
          steam
          telegram
          tumblr
          twitch
          youtube
        }
        streaming {
          friday {
            start
            end
          }
          saturday {
            start
            end
          }
          sunday {
            start
            end
          }
        }
        banner {
          childImageSharp {
            fluid(maxWidth: 1140) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Dealer

const DealerContent: React.FC<Props> = ({ data, location, pageContext }: Props) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter
  const banner = post?.banner ?? null
  const images = post?.images ?? null
  const socialLinks = post?.social

  const { prevTitle, prevSlug, nextTitle, nextSlug } = pageContext

  return (
    <>
      <Section isContainer isFluid pos='first' bg='light' className='jumbotron'>
        <div className='container'>
          <div className='row'>
            {banner?.childImageSharp?.fluid !== null &&
              <Img
                fluid={banner?.childImageSharp?.fluid as FluidObject}
                className='img-fluid'
              />
            }
          </div>
        </div>
          
      </Section>
      <Section isContainer>
        <TextCard>
          <div className='row'>
            <div className='col-lg-6 text-left p-1'>
              <h1>{post?.title ?? ''}</h1>
              <h2>by {post?.dealer ?? ''}</h2>
              <hr />
              <p>{post?.description ?? ''}</p>
            </div>
            <div className='col-lg-6 text-center p-2'>
              {
                socialLinks !== null && socialLinks !== undefined
                  ? <div className='container text-center'>
                      <h2>Say hello!</h2>
                      <SocialLinks data={socialLinks} />
                    </div>
                  : <div className='container text-center'>
                      <h2>I do not have any social media links to share!</h2>
                    </div>
              }
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 p-2'>
              <h2>Streaming Times</h2>
              <hr />
              <h3>Friday, March 19th</h3>
              <ol>
                {
                  post?.streaming?.friday?.map((block, i) =>
                    <li key={`friday-time-${i}`}>
                      {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                    </li>
                  )
                }
              </ol>
              <h3>Saturday, March 20th</h3>
              <ol>
                {
                  post?.streaming?.saturday?.map((block, i) =>
                    <li key={`saturday-time-${i}`}>
                      {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                    </li>
                  )
                }
              </ol>
              <h3>Sunday, March 21st</h3>
              <ol>
                {
                  post?.streaming?.sunday?.map((block, i) =>
                    <li key={`sunday-time-${i}`}>
                      {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                    </li>
                  )
                }
              </ol>
            </div>
            <div className='col-lg-6 text-center p-2'>
              {
                post?.url !== null && post?.url !== undefined
                  ? <Anchor label='Check out my store!' url={post?.url ?? ''} isFullwidth />
                  : <h2>I do not have a website to share!</h2>
              }
            </div>
          </div>
        </TextCard>
      </Section>
      <Section isContainer>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 576: 1, 768: 2, 992: 2, 1200: 2 }}
        >
          <Masonry>
          {images?.map(image =>
            image?.childImageSharp?.fluid !== null &&
              <Img
                fluid={image?.childImageSharp?.fluid as FluidObject}
                className='d-block rounded-3 border border-primary m-1'
              />
            )}
          </Masonry>
        </ResponsiveMasonry>
      </Section>
      <Section isContainer>
        <TextCard>
          <div className='d-flex justify-content-between align-items-center'>
            <Link label={`← ${prevTitle}`} to={`..${prevSlug}`} />
            <Link label={`${nextTitle} →`} to={`..${nextSlug}`} />
          </div>
        </TextCard>
      </Section>
    </>
  )
}
