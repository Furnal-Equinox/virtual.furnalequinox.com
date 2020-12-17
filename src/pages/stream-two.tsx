import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import ResponsivePlayer from '../components/responsive-player/responsive-player'

import config from '../../site-config'
import { StreamTwoQueryQuery } from '../../types/graphql-types'
import SocialCard from '../components/cards/social-card/social-card'

import PlaceholderImage from '../../content/images/moritz-mentges-unsplash.jpg'
import CharityMeter from '../components/charity-meter/charity-meter'

/*
 * See https://github.com/cookpete/react-player#responsive-player
 */

interface Props {
  data: StreamTwoQueryQuery
  location: Location
}

const StreamTwo: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Stream 2 | ${config.siteTitle}`} />
      <Meta />
      <div>
        <section className='py-3 py-lg-5'>
          <div className='container text-center'>
            <div className='row'>
              <ResponsivePlayer url='https://youtu.be/mresGBgbQ2Y' />
            </div>
          </div>
        </section>
        <section className='py-5 bg-secondary'>
          <div className='container text-center text-white'>
            <div className='row'>
              <h1>Charity Meter</h1>
            </div>
            <div className='row'>
              <div className='col'>
                <p className='h1 m-0'>$0</p>
              </div>
              <div className='col-6 d-block my-auto'>
                <CharityMeter />
              </div>
              <div className='col'>
                <p className='h1 m-0'>$10,000</p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-3 py-lg-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <SocialCard 
                  title='Join the chat on Discord!'
                  description=''
                  banner={PlaceholderImage}
                  url=''
                />
              </div>
              <div className='col-md-6'>
                <SocialCard 
                  title='Join us on VRChat!'
                  description=''
                  banner={PlaceholderImage}
                  url=''
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default StreamTwo

export const streamTwoQuery = graphql`
  query StreamTwoQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
