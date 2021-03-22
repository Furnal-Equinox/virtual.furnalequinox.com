import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import {
  Jumbotron,
  Meta,
  ShopItemCard,
  TextCard
} from '../components'

import {
  Event,
  Section
} from '../layouts'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.ConStoreQueryQuery
}

const ConStore: React.FC<Props> = ({ data, location, navigate }: Props) => {

  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`Con-Store | ${config.siteTitle}`} />
      <Meta />
      <div>
        <ConStoreContent
          data={data}
          location={location}
        />
      </div>
    </Event>
  )
}

export default ConStore

export const conStoreQuery = graphql`
  query ConStoreQuery {
    remark: allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "product" } } }
    ) {
      group(field: frontmatter___limited) {
        fieldValue
        products: edges {
          product: node {
            id
            frontmatter {
              title
              url
              limited
              image {
                childImageSharp {
                  fluid(maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              desc
            }
          }
        }
      }
    }
  }
`

const ConStoreContent: React.FC<Props> = ({ data, location }: Props) => {
  const productGroups = data.remark.group
  const limitedProducts = productGroups[1].fieldValue === 'true' ? productGroups[1].products : []
  const regularProducts = productGroups[0].fieldValue === 'false' ? productGroups[0].products : []

  return (
    <>
      <Jumbotron
        title='Con Store'
        subtitle='Please buy something to support FE and Hobbitstee Wildlife Refuge!'
      />
      <Section isContainer pos='middle'>
        <TextCard>
          <p>
            Show your support for Furnal Equinox with these Virtual Furnal Equinox: Pixel Purrfect merchandise!
          </p>
        </TextCard>
      </Section>
      <Section isContainer pos='middle'>
        <div className='container'>
          <div className='row'>
            {regularProducts.map(({ product }, i) =>
              <div className='col-lg-4' key={`product-${i}`}>
                <ShopItemCard
                  name={product?.frontmatter?.title}
                  description={product?.frontmatter?.desc}
                  url={product?.frontmatter?.url}
                  banner={product?.frontmatter?.image?.childImageSharp?.fluid}
                />
              </div>
            )}
          </div>
        </div>
      </Section>
      <Section isContainer pos='middle'>
        <TextCard>
          <h2>Limited Stock</h2>
          <p>
            We’ve also had some exclusive products made this year, these are available in limited quantities!{' '}
            These feature talented artists from the fandom.{' '}
            A number of these products also help out our charity, Hobbitstee!
          </p>
        </TextCard>
      </Section>
      <Section isContainer pos='middle'>
        <div className='container'>
          <div className='row'>
            {limitedProducts.map(({ product }, i) =>
              <div className='col-lg-4' key={`product-${i}`}>
                <ShopItemCard
                  name={product?.frontmatter?.title}
                  description={product?.frontmatter?.desc}
                  url={product?.frontmatter?.url}
                  banner={product?.frontmatter?.image?.childImageSharp?.fluid}
                />
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}
