import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

import CharityMeter from '../components/charity-meter/charity-meter'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import PlaceholderImage from '../../content/images/moritz-mentges-unsplash.jpg'
import ResponsivePlayer from '../components/responsive-player/responsive-player'
import SocialCard from '../components/cards/social-card/social-card'

import config from '../../site-config'
import { HomeQueryQuery } from '../../types/graphql-types'


interface Props {
  data: HomeQueryQuery
  location: Location
}

const Home: React.FC<Props> = ({ data, location }: Props) => {
  //const dealers = data.remark.dealers

  return (
    <Layout location={location}>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Meta />
      <div>
        <section className='py-3 py-lg-5'>
          <div className='container text-center'>
            <div className='row'>
              <ResponsivePlayer url='https://youtu.be/21X5lGlDOfg' />
            </div>
          </div>
        </section>
        <section className='py-3 py-lg-5 bg-white'>
          <div className='container table-responsive'>
            <div className='text-center'>
              
            </div>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Starting Time</th>
                  <th scope='col'>Event Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>12:00 PM</th>
                  <td>Opening Ceremony</td>
                </tr>
                <tr>
                  <th scope='row'>12:00 PM</th>
                  <td>Opening Ceremony</td>
                </tr>
                <tr>
                  <th scope='row'>12:00 PM</th>
                  <td>Opening Ceremony</td>
                </tr>
                <tr>
                  <th scope='row'>12:00 PM</th>
                  <td>Opening Ceremony</td>
                </tr>
                <tr>
                  <th scope='row'>12:00 PM</th>
                  <td>Opening Ceremony</td>
                </tr>
                <tr>
                  <th scope='row'>12:00 PM</th>
                  <td>Opening Ceremony</td>
                </tr>
                <tr>
                  <th scope='row'>12:00 PM</th>
                  <td>Opening Ceremony</td>
                </tr>
                <tr>
                  <th scope='row'>12:00 PM</th>
                  <td>Opening Ceremony</td>
                </tr>
              </tbody>
            </table>
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

export default Home

export const homeQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
