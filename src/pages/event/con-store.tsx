import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'
import { ConStoreQueryQuery } from '../../../types/graphql-types'

import {
  Jumbotron,
  Meta,
  ShopItemCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'




interface Props extends RouteComponentProps {
  data: ConStoreQueryQuery
}

const ConStore: React.FC<Props> = ({ data, location }: Props) => {
  const Content = makePrivateContent(ConStoreContent)

  return (
    <Event location={location}>
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
