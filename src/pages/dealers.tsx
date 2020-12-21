import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import MockDealerCard from '../components/cards/mock-dealer-card/mock-dealer-card'
import CardGrid from '../components/card-grid/card-grid'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import { DealersIndexQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'
import Jumbotron from '../components/jumbotron/jumbotron'

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
        <section className='py-5'>
          <CardGrid data={dealers} />
        </section>
        <Jumbotron title='Dealers (Mock Data)' subtitle='Check out all these cool dealers!' />
        <section className='py-3 py-lg-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <MockDealerCard />
              </div>
              <div className='col-lg-12'>
                <MockDealerCard />
              </div>
              <div className='col-lg-12'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
            </div>
          </div>
        </section>
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
