import { graphql, Link } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

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
      <Meta customDescription={'Dealers\' Den and Artists\' Alley'} />
      <div>
        <section>
        {dealers.map(dealer => (
          <div key={dealer.dealer.id}>
            <Link to={`.${dealer.dealer.fields?.slug ?? ''}`}>
              <h1>{dealer.dealer.frontmatter?.title}</h1>
            </Link>
          </div>
        ))}
        </section>
        <section>

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
            priority
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
