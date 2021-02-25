import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'

import {
  CharityMeter,
  Meta,
  ResponsivePlayer,
  TextCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'
import { PlaceholderAdBanner } from '../../components/placeholders'

interface Props extends RouteComponentProps {}

const Livestream: React.FC<Props> = ({ location }: Props) => {
  const Content = makePrivateContent(LivestreamDashboard)

  return (
    <Event location={location}>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Content
          location={location}
          callbackPath='/event/livestream/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default Livestream

const LivestreamDashboard: React.FC<Props> = ({ location }: Props) => {
  return (
    <>
      <Section isContainer isFluid pos='first' bg='light' className='jumbotron'>
        <div className='container'>
          <div className='row'>
            <ResponsivePlayer url='https://vimeo.com/410693732' />
          </div>
        </div>
      </Section>
      <Section isContainer pos='middle'>
        <TextCard>
          <div className='text-white'>
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
                <p className='h1 m-0'>
                  {`$${process.env.GATSBY_DONATION_GOAL as string}`}
                </p>
              </div>
            </div>
          </div>
        </TextCard>
      </Section>
      <Section isContainer pos='middle'>
        <TextCard>
          <PlaceholderAdBanner />
        </TextCard>
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
    </>
  )
}