import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'
import { Helmet } from 'react-helmet'

import './style.scss'
import Layout from '../../components/layout/layout'
import Meta from '../../components/meta/meta'

import config from '../../../site-config'

import { DealerBySlugQuery } from '../../../types/graphql-types'

import SocialLinks, { SocialLink } from '../../components/social-links/social-links'
import { Maybe, Just, Nothing } from 'purify-ts'
import Anchor from '../../components/anchor/anchor'
import Section from '../../layouts/section/section'
import { TextCard } from '../../components/cards'
import Link from '../../components/link/link'

interface Props {
  data: DealerBySlugQuery
  location: Location
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

  // TODO: refactor this mess of a converter!!!
  const reducedSocialLinks: Array<Maybe<SocialLink>> = [
    socialLinks?.behance ? Just({
      name: 'behance',
      url: socialLinks?.behance
    }) : Nothing,    
    socialLinks?.deviantart ? Just({
      name: 'deviantart',
      url: socialLinks?.deviantart
    }) : Nothing,    
    socialLinks?.discord ? Just({
      name: 'discord',
      url: socialLinks?.discord
    }) : Nothing,    
    socialLinks?.etsy ? Just({
      name: 'etsy',
      url: socialLinks?.etsy
    }) : Nothing,    
    socialLinks?.facebook ? Just({
      name: 'facebook',
      url: socialLinks?.facebook
    }) : Nothing,    
    socialLinks?.furaffinity ? Just({
      name: 'furaffinity',
      url: socialLinks?.furaffinity
    }) : Nothing,    
    socialLinks?.github ? Just({
      name: 'github',
      url: socialLinks?.github
    }) : Nothing,    
    socialLinks?.instagram ? Just({
      name: 'instagram',
      url: socialLinks?.instagram
    }) : Nothing,    
    socialLinks?.picarto ? Just({
      name: 'picarto',
      url: socialLinks?.picarto
    }) : Nothing,    
    socialLinks?.pinterest ? Just({
      name: 'pinterest',
      url: socialLinks?.pinterest
    }) : Nothing,    
    socialLinks?.steam ? Just({
      name: 'steam',
      url: socialLinks?.steam
    }) : Nothing,    
    socialLinks?.telegram ? Just({
      name: 'telegram',
      url: socialLinks?.telegram
    }) : Nothing,    
    socialLinks?.tumblr ? Just({
      name: 'tumblr',
      url: socialLinks?.tumblr
    }) : Nothing,    
    socialLinks?.twitch ? Just({
      name: 'twitch',
      url: socialLinks?.twitch
    }) : Nothing,    
    socialLinks?.twitter ? Just({
      name: 'twitter',
      url: socialLinks?.twitter
    }) : Nothing,    
    socialLinks?.youtube ? Just({
      name: 'youtube',
      url: socialLinks?.youtube
    }) : Nothing
  ]

  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${post?.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <Meta
        postPath={postNode?.fields?.slug}
        postNode={postNode}
        postSEO
      />
      <div>
        <Section pos='first'>
          <div className='content'>
            {banner?.childImageSharp?.fluid && (
              <Img
                fluid={banner.childImageSharp.fluid as FluidObject}
                style={{ display: 'block', margin: '0 auto' }}
              />
            )}
          </div>
        </Section>
        <Section isContainer>
          <TextCard>
            <div className='row'>
              <div className='col-lg-6 text-left p-1'>
                <h1>{post?.title}</h1>
                <h2>by {post?.dealer}</h2>
                <p className='lead'>{post?.description}</p>
              </div>
              <div className='col-lg-6 text-center p-2'>
                { reducedSocialLinks.length > 0
                  ? <>
                    <h2>Say hello!</h2>
                    <SocialLinks data={reducedSocialLinks}/>
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
                  {post?.streaming?.saturday?.map((block, i) =>
                    <li key={`saturday-time-${i}`}>
                      {`${block?.start} to ${block?.end}`}
                    </li>
                  )}
                </ul>
                <h3>Sunday, March 21st</h3>
                <ul>
                  {post?.streaming?.sunday?.map((block, i) =>
                    <li key={`sunday-time-${i}`}>
                      {`${block?.start} to ${block?.end}`}
                    </li>
                  )}
                </ul>
              </div>
              <div className='col-lg-6 p-2'>
                <Anchor label='Check out my store!' url={post?.url ?? ''} isFullwidth />
              </div>
            </div>
          </TextCard>
        </Section>
        <section className='container'>
          <div className='row'>
            {images?.map(image => (
              image?.childImageSharp?.fluid &&
            <div className='col-12'>
              <Img
                fluid={image?.childImageSharp?.fluid as FluidObject}
                className='d-block rounded-3 my-3'
              />
            </div>
            ))}
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
