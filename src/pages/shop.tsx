import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

import { ShopQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'
import MockShopItemCard from '../components/cards/mock-shop-item-card/mock-shop-item-card'

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
        <section className='container-fluid py-3 py-lg-5 bg-light text-center'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1>Shop</h1>
            <p className='lead'>Buy some cool stuff!</p>
          </div>
        </section>
        <section className='py-3 py-lg-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
              </div>
              <div className='col-lg-4'>
                <MockShopItemCard />
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
