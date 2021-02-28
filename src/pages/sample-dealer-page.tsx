import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img, { FluidObject } from 'gatsby-image'

import config from '../../site-config'
import '../templates/dealer/style.scss'

import {
  Meta,
  SocialLinks,
  TextCard
} from '../components'

import {
  FakeEvent,
  Section
} from '../layouts'

import Button from 'react-bootstrap/Button'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.SampleDealerQuery
  pageContext: {
    isSfw: boolean
    slug: string
    nextTitle: string
    nextSlug: string
    prevTitle: string
    prevSlug: string
  }
}

const Dealer: React.FC<Props> = ({ data, location }: { data: GatsbyTypes.SampleDealerQuery } & RouteComponentProps) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter

  return (
    <FakeEvent location={location}>
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
    </FakeEvent>
  )
}

export const sampleDealerQuery = graphql`
  query SampleDealer {
    markdownRemark(fields: { slug: { eq: "/beast-within/" } }) {
      html
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
          patreon
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
          imgFile {
            childImageSharp {
              fluid(maxWidth: 1140) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          desc
        }
        images {
          imgFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          desc
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
  const html = postNode?.html ?? null

  const { prevTitle, prevSlug, nextTitle, nextSlug } = pageContext

  return (
    <>
      <Section isContainer isFluid pos='first' bg='light' className='jumbotron'>
        <div className='container'>
          <div className='row'>
            {banner?.imgFile?.childImageSharp?.fluid !== null &&
              <Img
                title={banner?.desc ?? "Dealer's banner for their store"}
                fluid={banner?.imgFile?.childImageSharp?.fluid as FluidObject}
                className='img-fluid'
              />}
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
              <div className='table-responsive'>
                <table className='table table-striped table-hover'>
                  <thead>
                    <tr>
                      <th scope='col'>Date</th>
                      <th scope='col'>Time (24 Hour Clock)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post?.streaming?.friday?.map((block, i) =>
                      <tr key={`friday-time-${i}`}>
                        <th scope='row'>Friday, March 19th</th>
                        <td>
                          {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                        </td>
                      </tr>
                    )}
                    {post?.streaming?.saturday?.map((block, i) =>
                      <tr key={`saturday-time-${i}`}>
                        <th scope='row'>Saturday, March 20th</th>
                        <td>
                          {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                        </td>
                      </tr>
                    )}
                    {post?.streaming?.sunday?.map((block, i) =>
                      <tr key={`sunday-time-${i}`}>
                        <th scope='row'>Sunday, March 21st</th>
                        <td>
                          {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-lg-6 text-center p-2'>
              {post?.url !== null && post?.url !== undefined
                ? <Button
                    title={`Link to the store or website for ${post?.title ?? 'this dealer'}`}
                    href={post?.url ?? ''}
                    size='lg'
                  >
                  Check out my store!
                </Button>
                : <h2>I do not have a website to share!</h2>}
            </div>
          </div>
        </TextCard>
      </Section>
      {html !== null &&
        <Section isContainer>
          <TextCard>
            <div
              className='content'
              dangerouslySetInnerHTML={{
                __html: html
              }}
            />
          </TextCard>
        </Section>}
      <Section isContainer>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 576: 1, 768: 2, 992: 2, 1200: 2 }}
        >
          <Masonry>
            {images?.map(image =>
              image?.imgFile?.childImageSharp?.fluid !== null &&
                <Img
                  title={image?.desc ?? "One of this dealer's images"}
                  fluid={image?.imgFile?.childImageSharp?.fluid as FluidObject}
                  className='d-block rounded-3 border border-primary m-1'
                />
            )}
          </Masonry>
        </ResponsiveMasonry>
      </Section>
      <Section isContainer>
        <TextCard>
          <div className='d-flex justify-content-between align-items-center'>
            <Link
              title={`Link to the previous dealer, ${prevTitle}`}
              to={`..${prevSlug}`}
              role='button'
              className='btn btn-primary btn-lg rounded-3'
            >
              {`← ${prevTitle}`}
            </Link>
            <Link
              title={`Link to the next dealer, ${nextTitle}`}
              to={`..${nextSlug}`}
              role='button'
              className='btn btn-primary btn-lg rounded-3'
            >
              {`${nextTitle} →`}
            </Link>
          </div>
        </TextCard>
      </Section>
    </>
  )
}
