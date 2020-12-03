import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Card from '../components/card/card'
import MockCard from '../components/mock-card/mock-card'
import CardGrid from '../components/card-grid/card-grid'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import { DealersIndexQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'

interface Props {
  data: DealersIndexQueryQuery
  location: Location
}

const DealersIndex: React.FC<Props> = ({ data, location }: Props) => {
  const dealers = data.remark.dealers
  const dealer = data.remark.dealers[0].dealer

  return (
    <Layout location={location}>
      <Helmet title={`Dealers' Den | ${config.siteTitle}`} />
      <Meta customDescription={'Dealers\' Den and Artists\' Alley'} />
      <div>
        <section className='jumbotron text-center'>
          <div className='container'>
            <h1>Dealers</h1>
            <p className='lead'>Check out all these cool dealers!</p>
          </div>
        </section>
        <section className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <Card 
                  title={dealer?.frontmatter?.title ?? ''} 
                  dealer={dealer?.frontmatter?.dealer ?? ''} 
                  description={dealer?.frontmatter?.description ?? ''} 
                  banner={dealer?.frontmatter?.banner?.childImageSharp?.fluid?.src ?? ''}
                  slug={dealer.fields?.slug ?? '#'}/>
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
            </div>
          </div>
        </section>
        <section className='jumbotron text-center'>
          <div className='container'>
            <h1>Artists</h1>
            <p className='lead'>Check out all these cool artists!</p>
          </div>
        </section>
        <section className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
              </div>
              <div className='col-md-4'>
                <MockCard />
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
      sort: { fields: [frontmatter___title], order: DESC }
      filter: { frontmatter: { layout: { eq: "dealer" } } }
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
            premium
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
