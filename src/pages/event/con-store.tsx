import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'
import { ConStoreQueryQuery } from '../../../types/graphql-types'

import {
  Jumbotron,
  Meta,
  ShopItemCard,
  TextCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

interface Props extends RouteComponentProps {
  data: ConStoreQueryQuery
}

const ConStore: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const Content = makePrivateContent(ConStoreContent)

  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`Con-Store | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Content
          data={data}
          location={location}
          callbackPath='/event/con-store/'
          allowedRoles={['free']}
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
      products: edges {
        product: node {
          id
          frontmatter {
            title
            url
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
`

const ConStoreContent: React.FC<Props> = ({ data, location }: Props) => {
  const products = data.remark.products


  return (
    <>
      <Jumbotron
        title='Con Store'
        subtitle='Please buy something to support FE and Hobbitstee Wildlife Refuge!'
      />
      <Section isContainer pos='middle'>
        <TextCard>
          <p>
            Show your support for Furnal Equinox with this Virtual Furnal Equinox: Pixel Purrfect merchandise! 
          </p>
        </TextCard>
      </Section>
      <Section isContainer pos='middle'>
        <div className='container'>
          <div className='row'>
            {products.map(({ product }) => 
              <div className='col-lg-4'>
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
            <div className='col-lg-4'>
              <ShopItemCard />
            </div>
            <div className='col-lg-4'>
              <ShopItemCard />
            </div>
            <div className='col-lg-4'>
              <ShopItemCard />
            </div>
            <div className='col-lg-4'>
              <ShopItemCard />
            </div>
            <div className='col-lg-4'>
              <ShopItemCard />
            </div>
            <div className='col-lg-4'>
              <ShopItemCard />
            </div>
            <div className='col-lg-4'>
              <ShopItemCard />
            </div>
            <div className='col-lg-4'>
              <ShopItemCard />
            </div>
            <div className='col-lg-4'>
              <ShopItemCard />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
