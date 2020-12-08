import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

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

  return (
    <Layout location={location}>
      <Helmet title={`Dealers' Den | ${config.siteTitle}`} />
      <Meta custolgescription={'Dealers\' Den and Artists\' Alley'} />
      <div>
        <section className='container-fluid py-3 py-lg-5 bg-light text-center'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1>Dealers (Live Data)</h1>
            <p className='lead'>Check out all these cool dealers!</p>
          </div>
        </section>
        <section className='py-5'>
          <CardGrid data={dealers} />
        </section>
        <section className='container-fluid py-3 py-lg-5 bg-light text-center'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1>Dealers (Mock Grid)</h1>
            <p className='lead'>Check out all these cool dealers!</p>
          </div>
        </section>
        <section className='py-3 py-lg-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <MockCard />
              </div>
              <div className='col-lg-12'>
                <MockCard />
              </div>
              <div className='col-lg-12'>
                <MockCard />
              </div>
              <div className='col-lg-4'>
                <MockCard />
              </div>
              <div className='col-lg-4'>
                <MockCard />
              </div>
              <div className='col-lg-4'>
                <MockCard />
              </div>
              <div className='col-lg-4'>
                <MockCard />
              </div>
              <div className='col-lg-4'>
                <MockCard />
              </div>
              <div className='col-lg-4'>
                <MockCard />
              </div>
              <div className='col-lg-4'>
                <MockCard />
              </div>
              <div className='col-lg-4'>
                <MockCard />
              </div>
              <div className='col-lg-4'>
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
