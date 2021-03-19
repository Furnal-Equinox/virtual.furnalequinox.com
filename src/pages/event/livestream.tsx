import React from 'react'
import { graphql } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'

import {
  AdCrawl,
  CountdownLiveStream,
  DonationsMeter,
  PanelLineup,
  Meta,
  TextCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

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
        <div className='container' tabIndex={0}>
          <div className='row'>
            <CountdownLiveStream
              title="Furnal Equinox's Pixel Purrfect livestream from Vimeo"
              url={process.env.GATSBY_STREAM_URL as string}
              placeholderImage={martyPlaceholder}
              placeholderImageAlt={[
                'This image reads',
                "'The convention is being held March 19, 20, 21.",
                "Visit www.furnalequinox.com and Furnal Equinox on Twitter.'",
                'This is the livestream placeholder image featuring Marty in a VR headset.'
              ].join(' ')}
            />
          </div>
        </div>
      </Section>
      <Section pos='middle'>
        <AdCrawl />
      </Section>
      <Section isContainer pos='middle'>
        <PanelLineup />
      </Section>
    </>
  )
}
