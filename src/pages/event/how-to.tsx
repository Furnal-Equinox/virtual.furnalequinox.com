import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'

import {
  DealerCard,
  Jumbotron,
  Meta,
  ResponsiveYouTubePlayer,
  TextCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

interface Props extends RouteComponentProps {}

const HowTo: React.FC<Props> = ({ location, navigate }: Props) => {
  const Content = makePrivateContent(HowToContent)

  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`How To | ${config.siteTitle}`} />
      <Meta customDescription='Tutorials on how to join and use Discord and the VRChat worlds' />
      <div>
        <Content
          location={location}
          callbackPath='/event/how-to/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default HowTo

const HowToContent: React.FC<Props> = ({ location }: Props) => {
  return (
    <>
      <Jumbotron title='How To' subtitle='Tutorials to help you make the most of Pixel Purrfect!' />
      <Section isContainer isTextCenter pos='middle'>
        <TextCard>
          <h1>Coming soon!</h1>
          <p>We're working hard on filming and editing the video tutorials!</p>
        </TextCard>
      </Section>
      {/*<Section isContainer isTextCenter pos='middle'>
        <TextCard>
          <ResponsiveYouTubePlayer url='https://youtu.be/p9hEg4u2fxE' />
        </TextCard>
      </Section>*/}
    </>
  )
}
