import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import PlaceholderImage from '../../content/images/moritz-mentges-unsplash.jpg'

import {
  CharityMeter,
  Meta,
  ResponsivePlayer,
  SocialCard,
  TextCard
} from '../components'

import {
  Layout, 
  makePrivateContent,
  Section
} from '../layouts'

interface Props extends RouteComponentProps {}

const Home: React.FC<Props> = ({ location }: Props) => {

  const Content = makePrivateContent(HomeDashboard)

  return (
    <Layout location={location}>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Content
          location={location}
          callbackPath='/'
          allowedRoles={['free']}
        />
      </div>
    </Layout>
  )
}

export default Home


const HomeDashboard: React.FC<Props> = ({ location }: Props) => {
  return (
    <>
      <Section isContainer isTextCenter pos='first'>
        <div className='row'>
          <ResponsivePlayer url='https://vimeo.com/410693732' />
        </div>
      </Section>
      <Section isContainer pos='middle'>
        <TextCard>
          <div className='table-responsive'>
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
        </TextCard>
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
      <Section isContainer pos='last'>
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
      </Section>
    </>
  )
}
