import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import { ShopQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'
import { ShopItemCard } from '../components/cards'
import Jumbotron from '../components/jumbotron/jumbotron'
import Section from '../layouts/section/section'

interface Props {
  data: ShopQueryQuery
  location: Location
}

const Shop: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Shop | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Jumbotron title='Shop' subtitle='Buy some cool stuff!' />
        <Section pos='middle'>
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
      </div>
    </Layout>
  )
}

export default Shop

export const shopQuery = graphql`
  query ShopQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
