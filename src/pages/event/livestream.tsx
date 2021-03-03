import React from 'react'
import { graphql } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'

import {
  AdCrawl,
  DonationsMeter,
  Meta,
  ResponsivePlayer,
  TextCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

import Img from 'gatsby-image'

import placeholderAdBanner from '../../../content/images/VFE_ad_banner.png'
import donationsMeterBG from '../../../content/images/donation_meter_bg.png'

import Carousel from 'react-bootstrap/Carousel'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.LivestreamQueryQuery
}

const Livestream: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const Content = makePrivateContent(LivestreamDashboard)

  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Content
          data={data}
          location={location}
          callbackPath='/event/livestream/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default Livestream

export const livestreamQuery = graphql`
  query LivestreamQuery {
    martyPlaceholder: file(relativePath: { eq: "video_loop.png" }) {
      childImageSharp {
        fluid(maxWidth: 1140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const LivestreamDashboard: React.FC<Props> = ({ data, location }: Props) => {
  const martyPlaceholder = data?.martyPlaceholder?.childImageSharp?.fluid
  
  return (
    <>
      <Section isContainer isFluid pos='first' bg='light' className='jumbotron'>
        <div className='container'>
          <div className='row'>
            {martyPlaceholder !== undefined && <Img 
              fluid={martyPlaceholder}
              className='img-fluid'
              alt="This image reads 'The convention is being held March 19, 20, 21. Visit www.furnalequinox.com and Furnal Equinox on Twitter.' This is the livestream placeholder image featuring Marty in a VR headset."
            />}
          </div>
        </div>
      </Section>
      <Section isContainer pos='middle'>
        <div className='card rounded-3 border border-primary border-5'>
          <img src={donationsMeterBG} className='img-fluid rounded-3' />
          <div className='card-img-overlay'>
            <div className='card-body w-100 h-100 d-flex align-items-center'>
              <div className='row justify-content-center w-75'>
                <div className='col align-items-center d-block my-auto'>
                  <DonationsMeter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section pos='middle'>
        <AdCrawl />
      </Section>
      <Section isContainer pos='middle'>
        <TextCard>
          <h1>Lineup</h1>
          <h2>Stay tuned - we'll be filling this out soon!</h2>
          <h2>Friday, March 19th</h2>
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
              </tbody>
            </table>
          </div>
        </TextCard>
      </Section>
    </>
  )
}
