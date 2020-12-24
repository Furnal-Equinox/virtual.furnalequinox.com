import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import { DealerCard } from '../components/cards'
import CardGrid from '../components/card-grid/card-grid'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import { DealersIndexQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'
import Jumbotron from '../components/jumbotron/jumbotron'
import Section from '../layouts/section/section'

interface Props {
  data: DealersIndexQueryQuery
  location: Location
}

const DealersIndex: React.FC<Props> = ({ data, location }: Props) => {
  const allDealers = data.remark.group
  const premiumDealers = allDealers[1].fieldValue === 'true' ? allDealers[1].dealers : null
  const regularDealers = allDealers[0].fieldValue === 'false' ? allDealers[0].dealers : null

  return (
    <Layout location={location}>
      <Helmet title={`Dealers Den | ${config.siteTitle}`} />
      <Meta customDescription={'Dealers Den'} />
      <div>
        <Jumbotron title='Premium Dealers (Live Data)' subtitle='Check out all these cool dealers!' />
        <Section pos='middle'>
          <CardGrid data={premiumDealers} />
        </Section>
        <Jumbotron title='Regular Dealers (Live Data)' subtitle='Check out all these cool dealers!' />
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
