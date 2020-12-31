import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'


import { Helmet } from 'react-helmet'

import CharityMeter from '../components/charity-meter/charity-meter'

import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'
import DealerCard from '../components/cards/dealer-card/dealer-card'
import ResponsivePlayer from '../components/responsive-player/responsive-player'
import SocialCard from '../components/cards/social-card/social-card'

import { AdultQueryQuery } from '../../types/graphql-types'
import config from '../../site-config'
import PlaceholderImage from '../../content/images/moritz-mentges-unsplash.jpg'
import Jumbotron from '../components/jumbotron/jumbotron'
import Section from '../layouts/section/section'

interface Props extends RouteComponentProps {
  data: AdultQueryQuery
}

const Adult: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Adult | ${config.siteTitle}`} />
      <Meta customDescription='Adults-only section' />
      <div>
        <Section pos='first'>
          <div className='container text-center'>
            <div className='row'>
              <ResponsivePlayer url='https://youtu.be/21X5lGlDOfg' />
            </div>
          </div>
        </Section>
        <Section pos='middle' bg='secondary'>
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
        </Section>
        <Section pos='middle'>
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
        </Section>
        <Jumbotron title='Dealers (Mock Data)' subtitle='Check out all these cool dealers!' /> 
        <Section pos='last'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
              <div className='col-lg-6'>
                <DealerCard />
              </div>
            </div>
          </div>
        </Section>
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
