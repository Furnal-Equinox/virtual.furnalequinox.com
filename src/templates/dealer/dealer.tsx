import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { Helmet } from 'react-helmet'

import './style.scss'
import Layout from '../../layouts/layout'
import Meta from '../../components/meta'

import config from '../../../site-config'

import { DealerBySlugQuery } from '../../../types/graphql-types'

import Anchor from '../../components/anchor'
import Section from '../../layouts/section'
import { TextCard } from '../../components/cards'
import Link from '../../components/link'
import SocialLinks from '../../components/social-links'

interface Props extends RouteComponentProps {
  data: DealerBySlugQuery
  pageContext: {
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
  const banner = post?.banner ?? null
  const images = post?.images ?? null
  const socialLinks = post?.social

  const { prevTitle, prevSlug, nextTitle, nextSlug } = pageContext

  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${post?.title ?? ''} | ${config.siteTitle}`}</title>
      </Helmet>
      <Meta
        postPath={postNode?.fields?.slug}
        postNode={postNode}
        postSEO
      />
      <div>
        <Section pos='first'>
          <div className='content'>
            {
              banner?.childImageSharp?.fluid !== null &&
              <Img
                fluid={banner?.childImageSharp?.fluid as FluidObject}
                style={{ display: 'block', margin: '0 auto' }}
              />
            }
          </div>
        </Section>
        <Section isContainer>
          <TextCard>
            <div className='row'>
              <div className='col-lg-6 text-left p-1'>
                <h1>{post?.title ?? ''}</h1>
                <h2>by {post?.dealer ?? ''}</h2>
                <p className='lead'>{post?.description ?? ''}</p>
              </div>
              <div className='col-lg-6 text-center p-2'>
                { 
                  socialLinks !== null && socialLinks !== undefined
                    ? <>
                      <h2>Say hello!</h2>
                      <SocialLinks data={socialLinks}/>
                    </>
                    : <>
                      <h2>I do not have any social media links to share!</h2>
                    </>
                }
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 p-2'>
                <h2>Streaming Times</h2>
                <h3>Saturday, March 20th</h3>
                <ul>
                  {
                    post?.streaming?.saturday?.map((block, i) =>
                      <li key={`saturday-time-${i}`}>
                        {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                      </li>
                    )
                  }
                </ul>
                <h3>Sunday, March 21st</h3>
                <ul>
                  { 
                    post?.streaming?.sunday?.map((block, i) =>
                      <li key={`sunday-time-${i}`}>
                        {`${block?.start ?? ''} to ${block?.end ?? ''}`}
                      </li>
                    )
                  }
                </ul>
              </div>
              <div className='col-lg-6 text-center p-2'>
                { post?.url !== null && post?.url !== undefined
                  ? <Anchor label='Check out my store!' url={post?.url ?? ''} isFullwidth />
                  : <h2>I do not have a website to share!</h2>
                }
              </div>
            </div>
          </TextCard>
        </Section>
        <section className='container'>
          <div className='row'>
            { 
              images?.map(image =>
                image?.childImageSharp?.fluid !== null &&
                <div className='col-12'>
                  <Img
                    fluid={image?.childImageSharp?.fluid as FluidObject}
                    className='d-block rounded-3 my-3'
                  />
                </div>
              )
            }
          </div>
        </section>
        <section className='container'>
          <TextCard>
            <div className='d-flex justify-content-between align-items-center'>
              <Link label={`← ${prevTitle}`} to={`..${prevSlug}`} />
              <Link label={`${nextTitle} →`} to={`..${nextSlug}`} /> 
            </div>
          </TextCard>
        </section>
      </div>
    </Layout>
  )
}

export const dealerQuery = graphql`
  query DealerBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
            fluid {
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
