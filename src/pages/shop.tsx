import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import { ShopQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'
import { ShopItemCard } from '../components/cards'
import Jumbotron from '../components/jumbotron/jumbotron'

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
        <section className='py-3 py-lg-5'>
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
        </section>
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
