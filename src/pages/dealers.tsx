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
  const dealers = data.remark.dealers

  return (
    <Layout location={location}>
      <Helmet title={`Dealers Den | ${config.siteTitle}`} />
      <Meta customDescription={'Dealers Den'} />
      <div>
        <Jumbotron title='Dealers (Live Data)' subtitle='Check out all these cool dealers!' />
        <Section pos='middle'>
          <CardGrid data={dealers} />
        </Section>
        <Jumbotron title='Dealers (Mock Data)' subtitle='Check out all these cool dealers!' />
        <Section pos='last'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <DealerCard />
              </div>
              <div className='col-lg-12'>
                <DealerCard />
              </div>
              <div className='col-lg-12'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
            </div>
          </div>
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
          layout: { eq: "dealer" }
          isAdult: { eq: false } 
        }
      }
      sort: { fields: [frontmatter___isPremium], order: DESC }
    ) {
      dealers: edges {
        dealer: node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            dealer
            description
            kind
            isPremium
            path
            banner {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
