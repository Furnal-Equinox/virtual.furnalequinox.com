import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import { DealerCard, TextCard } from '../components/cards'
import CardGrid from '../components/card-grid/card-grid'
import Link from '../components/link/link'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import { DealersIndexQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'
import Jumbotron from '../components/jumbotron/jumbotron'
import Section from '../layouts/section/section'

import { sample } from '../utils/tools'

interface Props {
  data: DealersIndexQueryQuery
  location: Location
}

const DealersIndex: React.FC<Props> = ({ data, location }: Props) => {
  const dealerGroups = data.remark.group
  const premiumDealers = dealerGroups[1].fieldValue === 'true' ? dealerGroups[1].dealers : null
  const regularDealers = dealerGroups[0].fieldValue === 'false' ? dealerGroups[0].dealers : null
  const allDealers = premiumDealers?.concat(regularDealers ?? []) ?? []

  return (
    <Layout location={location}>
      <Helmet title={`Dealers Den | ${config.siteTitle}`} />
      <Meta customDescription={'Dealers Den'} />
      <div>
        <Jumbotron 
          title='Premium Dealers (Live Data)' 
          subtitle='Check out all these cool dealers!'
        />
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h2>Feeling lucky?</h2>
                <p className='lead'>
                  Click this button to check out a random dealer!
                </p>
                <Link 
                  label={'Let\'s go!'} 
                  to={`.${
                    sample(allDealers).dealer.fields?.slug
                  }`}
                  size='lg'
                />
              </div>
            </div>
          </TextCard>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h2>Have something in mind?</h2>
                <p className='lead'>
                  Use the search bar!
                </p>
                <Link 
                  label={'Let\'s go!'} 
                  to={`.${
                    sample(allDealers).dealer.fields?.slug
                  }`}
                  size='lg'
                />
              </div>
            </div>
          </TextCard>
        </Section>
        <Section pos='middle'>
          <CardGrid data={premiumDealers} />
        </Section>
        <Jumbotron 
          title='Regular Dealers (Live Data)'
          subtitle='Check out all these cool dealers!'
        />
        <Section pos='last'>
          <CardGrid data={regularDealers} />
        </Section>
      </div>
    </Layout>
  )
}

export default DealersIndex

export const dealersQuery = graphql`
  query DealersIndexQuery {
  remark: allMarkdownRemark(
    filter: {
      frontmatter: {
        layout: {eq: "dealer"}, 
        isAdult: {eq: false}
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
