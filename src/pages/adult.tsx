import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import CharityMeter from '../components/charity-meter/charity-meter'

import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import MockDealerCard from '../components/cards/mock-dealer-card/mock-dealer-card'
import ResponsivePlayer from '../components/responsive-player/responsive-player'
import SocialCard from '../components/cards/social-card/social-card'

import { AdultQueryQuery } from '../../types/graphql-types'
import config from '../../site-config'
import PlaceholderImage from '../../content/images/moritz-mentges-unsplash.jpg'

interface Props {
  data: AdultQueryQuery
  location: Location
}

const Adult: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Adult | ${config.siteTitle}`} />
      <Meta customDescription='Adults-only section' />
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
        <section className='container-fluid py-3 py-lg-5 bg-light text-center'>
          <div className='col-lg-6 col-md-8 mx-auto'>
            <h1>Dealers (Mock Grid)</h1>
            <p className='lead'>Check out all these cool dealers!</p>
          </div>
        </section>
        <section className='py-3 py-lg-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
              <div className='col-lg-4'>
                <MockDealerCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Adult

export const adultQuery = graphql`
  query AdultQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
