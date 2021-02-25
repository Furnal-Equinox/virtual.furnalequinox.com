import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'

import {
  DealerCard,
  Jumbotron,
  Meta,
  TextCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

interface Props extends RouteComponentProps {}

const DiscordVR: React.FC<Props> = ({ location }: Props) => {
  const Content = makePrivateContent(DiscordVRContent)

  return (
    <Event location={location}>
      <Helmet title={`Discord & VR | ${config.siteTitle}`} />
      <Meta customDescription='Information about the Discord and the VRChat worlds' />
      <div>
        <Content
          location={location}
          callbackPath='/event/discord-vr/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default DiscordVR

const DiscordVRContent: React.FC<Props> = ({ location }: Props) => {
  return (
    <>
      <Jumbotron title={'Discord & VR'} subtitle='' />
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <h1>Nothing to see here...</h1>
          </TextCard>
        </Section>
    </>
  )
}
