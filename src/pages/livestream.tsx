import React from 'react'
import { graphql } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import {
  AdCrawl,
  CountdownLiveStream,
  DonationsMeter,
  PanelLineup,
  Meta
} from '../components'

import {
  Event,
  Section
} from '../layouts'

import Img from 'gatsby-image'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.LivestreamQueryQuery
}

const Livestream: React.FC<Props> = ({ data, location, navigate }: Props) => {

  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Meta />
      <div>
        <LivestreamDashboard
          data={data}
          location={location}
        />
      </div>
    </Event>
  )
}

export default Livestream

export const livestreamQuery = graphql`
  query LivestreamQuery {
    martyPlaceholder: file(relativePath: { eq: "livestream_placeholder.png" }) {
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
  const martyPlaceholderAlt = [
    'This image reads',
    "Thank you!",
    "Did you miss any of the panels? No worries!",
    "We're working on uploading them into a playlist.",
    "We'll put that here when it's ready.",
    "In the meantime, how about some numbers?",
    "3722 website registrations, over 3000 Discord members",
    "over 1800 unique livestream viewers on web",
    "Tens of thousands of visits to our VRChat worlds",
    "and $20,000 raised for our charity Hobbitstee Wildlife Refuge and Furnal Equinox with a 50 - 50 even split'",
    "This image shows Marty on the left, excited and starstruck with the text on the right"
  ].join(' ')

  return (
    <>
      <Section isContainer isFluid pos='first' bg='light' className='jumbotron'>
        <div className='container' tabIndex={0}>
          <div className='row'>
            {martyPlaceholder !== undefined && <Img
              fluid={martyPlaceholder}
              className='img-fluid'
              alt={martyPlaceholderAlt}
            />}
          </div>
        </div>
      </Section>
      <Section pos='middle'>
        <AdCrawl />
      </Section>
      <Section isContainer pos='middle'>
        <DonationsMeter />
      </Section>
      <Section isContainer pos='middle'>
        <PanelLineup />
      </Section>
    </>
  )
}
