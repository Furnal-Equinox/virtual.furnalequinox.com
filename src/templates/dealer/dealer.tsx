import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import sanitizeHtml from 'sanitize-html'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import config from '../../../site-config'
import './style.scss'

import { isStrEmpty } from '../../utils/tools'

import {
  Meta,
  SocialLinks,
  TextCard
} from '../../components'

import {
  Event,
  Section
} from '../../layouts'

import Button from 'react-bootstrap/Button'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.DealerBySlugQuery
  pageContext: {
    isSfw: boolean
    slug: string
    nextTitle: string
    nextSlug: string
    prevTitle: string
    prevSlug: string
  }
}

const Dealer: React.FC<Props> = ({ data, location, pageContext }: Props) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter

  const { isSfw } = pageContext

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
          pageContext={pageContext}
        />
      </div>
    </Event>
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
        description
        url
        social {
          behance
          deviantart
          discord
          etsy
          facebook
          flickr
          furaffinity
          github
          instagram
          other
          patreon
          picarto
          pinterest
          steam
          telegram
          tiktok
          tumblr
          twitch
          twitter
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
              ...LargeImage
            }
          }
          desc
        }
        images {
          imgFile {
            childImageSharp {
              ...LargeImage
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
  const socialLinks = post?.social
  const html = postNode?.html ?? null

  const banner = {
    image: getImage(post?.banner?.imgFile?.childImageSharp?.gatsbyImageData),
    desc: post?.banner?.desc
  }
  const images = post?.images?.map(x => ({
    image: getImage(x?.imgFile?.childImageSharp?.gatsbyImageData),
    desc: x?.desc
  }))

  const { prevTitle, prevSlug, nextTitle, nextSlug } = pageContext

  return (
    <>
      <Section isContainer isFluid pos='first' bg='light' className='jumbotron'>
        <div className='container' tabIndex={0}>
          <div className='row'>
            {banner?.image !== undefined &&
              <GatsbyImage
                alt={banner?.desc ?? "Dealer's banner for their store"}
                image={banner.image}
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
              <hr />
              <p>{post?.description ?? ''}</p>
            </div>
            <div className='col-lg-6 text-center p-2'>
              {
                socialLinks !== null && socialLinks !== undefined
                  ? <div className='container text-center'>
                    <h2>{"Say hello!"}</h2>
                    <SocialLinks data={socialLinks} />
                    </div>
                  : <div className='container text-center'>
                    <h2>{"I do not have any social media links to share!"}</h2>
                    </div>
              }
            </div>
          </div>
          <div className='row'>
            {(!isStrEmpty(post?.streaming?.friday) ||
              !isStrEmpty(post?.streaming?.saturday) ||
              !isStrEmpty(post?.streaming?.sunday)
            ) &&
              <div className='col-lg-6 p-2'>
                <h2>{"Streaming Times"}</h2>
                <hr />
                <div className='table-responsive'>
                  <table className='table table-striped table-hover'>
                    <thead>
                      <tr>
                        <th scope='col'>{"Date"}</th>
                        <th scope='col'>{"Time (24 Hour Clock)"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {post?.streaming?.friday?.map((block, i) =>
                        <tr key={`friday-time-${i}`}>
                          <th scope='row'>{"Friday, March 19th"}</th>
                          <td>
                            {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                          </td>
                        </tr>
                      )}
                      {post?.streaming?.saturday?.map((block, i) =>
                        <tr key={`saturday-time-${i}`}>
                          <th scope='row'>{"Saturday, March 20th"}</th>
                          <td>
                            {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                          </td>
                        </tr>
                      )}
                      {post?.streaming?.sunday?.map((block, i) =>
                        <tr key={`sunday-time-${i}`}>
                          <th scope='row'>{"Sunday, March 21st"}</th>
                          <td>
                            {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>}
            <div className='col-lg-6 text-center p-2'>
              {post?.url !== null && post?.url !== undefined
                ? <Button
                    title={`Link to the store or website for ${post?.title ?? 'this dealer'}`}
                    href={post?.url ?? ''}
                    size='lg'
                  >
                  {"Check out my store!"}
                </Button>
                : <h2>{"I do not have a website to share!"}</h2>}
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
                __html: sanitizeHtml(html)
              }}
            />
          </TextCard>
        </Section>}
      <Section isContainer>
        <span className='visually-hidden'>
          {"Here, you'll find the dealers' images. You can navigate over them with your tab key!"}
        </span>
        {((images?.length ?? 0) > 1) ? (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 576: 1, 768: 2, 992: 2, 1200: 2 }}
          >
            <Masonry>
              {images?.map((image, i) =>
                image.image !== undefined && (
                  <div tabIndex={0} key={`dealer-image-${i}`}>
                    <GatsbyImage
                      alt={image?.desc ?? "One of this dealer's images"}
                      image={image.image}
                      className='d-block rounded-3 border border-primary m-1'
                    />
                  </div>
                )
              )}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          images !== undefined && images[0]?.image !== undefined && (
            <div tabIndex={0}>
              <GatsbyImage
                alt={images[0]?.desc ?? "One of this dealer's images"}
                image={images[0]?.image}
                className='d-block rounded-3 border border-primary m-1'
              />
            </div>
          )
        )}
      </Section>
      <Section isContainer>
        <TextCard>
          <div className='container'>
            <div className='row justify-content-between'>
              <div className='col-md-6 p-3'>
                <Link
                  title={`Link to the previous dealer, ${prevTitle}`}
                  to={`..${prevSlug}`}
                  role='button'
                  className='btn btn-primary btn-lg rounded-3'
                >
                  <FontAwesomeIcon icon='angle-left' size='lg' />{' '}
                  {prevTitle}
                </Link>
              </div>
              <div className='col-md-6 p-3'>
                <Link
                  title={`Link to the next dealer, ${nextTitle}`}
                  to={`..${nextSlug}`}
                  role='button'
                  className='btn btn-primary btn-lg rounded-3'
                >
                  {nextTitle}
                  {' '}<FontAwesomeIcon icon='angle-right' size='lg' />
                </Link>
              </div>
            </div>
          </div>
        </TextCard>
      </Section>
    </>
  )
}
