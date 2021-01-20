import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta'
import Layout from '../layouts/layout'

import { ConStoreQueryQuery } from '../../types/graphql-types'

import config from '../../site-config'
import { ShopItemCard } from '../components/cards'
import Jumbotron from '../components/jumbotron'
import Section from '../layouts/section'
import { makePrivateContent } from '../layouts'

interface Props extends RouteComponentProps {
  data: ConStoreQueryQuery
}

const ConStore: React.FC<Props> = ({ data, location }: Props) => {
  const Content = makePrivateContent(ConStoreContent)

  return (
    <Layout location={location}>
      <Helmet title={`Con-Store | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Content
          data={data}
          location={location}
          callbackPath='/con-store/'
          allowedRoles={['free']}
        />
      </div>
    </Layout>
  )
}

export default ConStore

export const conStoreQuery = graphql`
  query ConStoreQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const ConStoreContent: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <>
      <Jumbotron title='ConStore' subtitle='Buy some cool stuff!' />
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
    </>
  )
}
