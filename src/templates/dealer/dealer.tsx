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



interface Props {
  data: DealerBySlugQuery
  location: Location
}

const Dealer: React.FC<Props> = ({ data, location }: Props) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter
  const banner = post?.banner ?? null
  const socialLinks = post?.social

  //TODO: refactor this mess of a converter!!!
  const reducedSocialLinks: Maybe<SocialLink>[] = [
    socialLinks?.behance ? Just({
      name: 'behance',
      url: socialLinks?.behance
    }) : Nothing
    ,
    socialLinks?.deviantart ? Just({
      name: 'deviantart',
      url: socialLinks?.deviantart
    }) : Nothing
    ,
    socialLinks?.discord ? Just({
      name: 'discord',
      url: socialLinks?.discord
    }) : Nothing
    ,
    socialLinks?.etsy ? Just({
      name: 'etsy',
      url: socialLinks?.etsy
    }) : Nothing
    ,
    socialLinks?.facebook ? Just({
      name: 'facebook',
      url: socialLinks?.facebook
    }) : Nothing
    ,
    socialLinks?.furaffinity ? Just({
      name: 'furaffinity',
      url: socialLinks?.furaffinity
    }) : Nothing
    ,
    socialLinks?.github ? Just({
      name: 'github',
      url: socialLinks?.github
    }) : Nothing
    ,
    socialLinks?.instagram ? Just({
      name: 'instagram',
      url: socialLinks?.instagram
    }) : Nothing
    ,
    socialLinks?.picarto ? Just({
      name: 'picarto',
      url: socialLinks?.picarto
    }) : Nothing
    ,
    socialLinks?.pinterest ? Just({
      name: 'pinterest',
      url: socialLinks?.pinterest
    }) : Nothing
    ,
    socialLinks?.steam ? Just({
      name: 'steam',
      url: socialLinks?.steam
    }) : Nothing
    ,
    socialLinks?.telegram ? Just({
      name: 'telegram',
      url: socialLinks?.telegram
    }) : Nothing
    ,
    socialLinks?.tumblr ? Just({
      name: 'tumblr',
      url: socialLinks?.tumblr
    }) : Nothing
    ,
    socialLinks?.twitch ? Just({
      name: 'twitch',
      url: socialLinks?.twitch
    }) : Nothing
    ,
    socialLinks?.twitter ? Just({
      name: 'twitter',
      url: socialLinks?.twitter
    }) : Nothing
    ,
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
        <section className='pt-0'>
          <div className='content'>
            {banner?.childImageSharp?.fluid && (
              <Img
                fluid={banner.childImageSharp.fluid as FluidObject}
                style={{ display: 'block', margin: '0 auto' }}
              />
            )}
          </div>
        </section>
        <section className='container'>
          <div className='row'>
            <div className='col-lg-6 text-center py-1'>
              <h1>{post?.title}</h1>
              <h2>by {post?.dealer}</h2>
              <p className='lead'>{post?.description}</p>
            </div>
            <div className='col-lg-6 text-center py-1'>
              <h1>Social media links</h1>
              <SocialLinks data={reducedSocialLinks}/>
            </div>
          </div>
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
