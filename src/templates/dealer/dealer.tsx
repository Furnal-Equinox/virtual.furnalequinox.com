import { graphql, Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'
import { Helmet } from 'react-helmet'

import './style.scss'
import Layout from '../../components/layout/layout'
import Meta from '../../components/meta/meta'

import config from '../../../site-config'

import { DealerBySlugQuery, PostBySlugQuery } from '../../../types/graphql-types'
import Icon from '../../components/icon/icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Deviantart, Facebook, Furaffinity } from '@icons-pack/react-simple-icons'



interface Props {
  data: DealerBySlugQuery
  location: Location
}

const Dealer: React.FC<Props> = ({ data, location }: Props) => {
  const postNode = data.markdownRemark
  const post = postNode?.frontmatter
  const banner = post?.banner ?? null

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
              <div className='row'>
                <div className='col'>
                  <Furaffinity />
                </div>
                <div className='col'>
                  <Facebook />
                </div>
                <div className='col'>
                  <Deviantart size='2rem' />
                </div>
              </div>
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
