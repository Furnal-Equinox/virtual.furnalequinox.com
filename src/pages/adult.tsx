import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  AdultQueryQuery,
  GatsbyImageSharpFluidFragment,
  MarkdownRemark,
  MarkdownRemarkFields,
  MarkdownRemarkFrontmatter,
  Maybe
} from '../../types/graphql-types'

import config from '../../site-config'

import {
  CharityMeter,
  Dealer,
  DealerCardGrid,
  Jumbotron,
  Meta,
  SocialCard
} from '../components'

import {
  Layout,
  makePrivateContent,
  Section
} from '../layouts'

import PlaceholderImage from '../../content/images/moritz-mentges-unsplash.jpg'
import ResponsivePlayer from '../components/responsive-player'

interface GatsbyDealer {
  dealer: (Pick<MarkdownRemark, 'id' | 'html'> & {
    fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>
    frontmatter?: Maybe<(Pick<MarkdownRemarkFrontmatter, 'title' | 'dealer' | 'description' | 'kind' | 'isPremium' | 'path'> & {
      banner?: Maybe<{
        childImageSharp?: Maybe<{
          fluid?: Maybe<GatsbyImageSharpFluidFragment>
        }>
      }>
    })>
  })
}

interface Props extends RouteComponentProps {
  data: AdultQueryQuery
}

const Adult: React.FC<Props> = ({ data, location }: Props) => {
  const Content = makePrivateContent(AdultDashboard)

  return (
    <Layout location={location}>
      <Helmet title={`Adult | ${config.siteTitle}`} />
      <Meta customDescription='Adults-only section' />
      <div>
        <Content
          data={data}
          location={location}
          callbackPath='/adult/'
          allowedRoles={['adult']}
        />
      </div>
    </Layout>
  )
}

export default Adult

export const adultQuery = graphql`
  query AdultQuery {
    remark: allMarkdownRemark(
      filter: {
        frontmatter: {
          layout: {eq: "dealer"}, 
          isAdult: {eq: true}
        }
      }, 
      sort: {
        fields: [frontmatter___title], 
        order: ASC
      }
    ) {
      group(field: frontmatter___isPremium) {
        fieldValue
        dealers: edges {
          dealer: node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              dealer
              description
              isPremium
              banner {
                childImageSharp {
                  fluid(maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const AdultDashboard: React.FC<Props> = ({ data, location }: Props) => {
  const dealerGroups = data.remark.group
  const premiumDealers = dealerGroups[1].fieldValue === 'true' ? dealerGroups[1].dealers : []
  const regularDealers = dealerGroups[0].fieldValue === 'false' ? dealerGroups[0].dealers : []

  const dealerReducer = (dealer: GatsbyDealer): Dealer => ({
    title: dealer.dealer.frontmatter?.title,
    dealer: dealer.dealer.frontmatter?.dealer,
    description: dealer.dealer.frontmatter?.description,
    banner: dealer.dealer.frontmatter?.banner?.childImageSharp?.fluid?.src,
    slug: dealer.dealer.fields?.slug,
    isPremium: dealer.dealer.frontmatter?.isPremium
  })

  const reducedRegularDealers: Dealer[] | undefined = regularDealers?.map(
    (dealer: GatsbyDealer) => dealerReducer(dealer)
  )

  const reducedPremiumDealers: Dealer[] | undefined = premiumDealers?.map(
    (dealer: GatsbyDealer) => dealerReducer(dealer)
  )

  return (
    <>
      <Section pos='first'>
        <div className='container text-center'>
          <div className='row'>
            <ResponsivePlayer url='https://vimeo.com/410693732' />
          </div>
        </div>
      </Section>
      <Section pos='middle' bg='secondary'>
        <div className='container text-center text-white'>
          <div className='row'>
            <h1>Charity Meter</h1>
          </div>
          <div className='row'>
            <div className='col'>
              <p className='h1 m-0'>$0</p>
            </div>
            <div className='col-6 d-block my-auto'>
              <CharityMeter />
            </div>
            <div className='col'>
              <p className='h1 m-0'>$10,000</p>
            </div>
          </div>
        </div>
      </Section>
      <Section pos='middle'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <SocialCard
                title='Join the chat on Discord!'
                description=''
                banner={PlaceholderImage}
                url=''
              />
            </div>
            <div className='col-md-6'>
              <SocialCard
                title='Join us on VRChat!'
                description=''
                banner={PlaceholderImage}
                url=''
              />
            </div>
          </div>
        </div>
      </Section>
      <Jumbotron title='Dealers (Mock Data)' subtitle='Check out all these cool dealers!' />
      <Section pos='middle'>
        <DealerCardGrid data={reducedPremiumDealers} />
      </Section>
      <Section pos='last'>
        <DealerCardGrid data={reducedRegularDealers} />
      </Section>
    </>
  )
}
