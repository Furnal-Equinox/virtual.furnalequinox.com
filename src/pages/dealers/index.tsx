import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

import Meta from '../../components/meta/meta'
import Layout from '../../components/layout/layout'
import { DealersIndexQueryQuery, ImageSharpFluid } from '../../../types/graphql-types'

interface Props {
  data: DealersIndexQueryQuery,
  location: Location
}

const DealersIndex: React.FC<Props> = ({ data, location }: Props) => {

  const dealers = data.remark.dealers
  const meta = data.site?.meta

  return (
    <Layout location={location}>
      <Meta site={meta} />
      <div>
        {dealers.map(dealer => (
          <div key={dealer.dealer.id}>
            <Link to={`.${dealer.dealer.fields?.slug ?? ''}`}>
              <h1>{dealer.dealer.frontmatter?.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default DealersIndex

export const dealersQuery = graphql`
  query DealersIndexQuery {
    site {
      meta: siteMetadata {
        title
        author {
          name
        }
        description
        siteUrl
      }
    }
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