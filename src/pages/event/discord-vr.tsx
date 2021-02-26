import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'
import { Link as GatsbyLink } from 'gatsby'
 
import {
  Anchor,
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

const DiscordVR: React.FC<Props> = ({ location, navigate }: Props) => {
  const Content = makePrivateContent(DiscordVRContent)

  return (
    <Event location={location} navigate={navigate}>
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
          <h1>Discord</h1>
          <p>
            Come and join other furries in our dedicated discord server!{' '}
            You can talk to dealers, ask questions to panelists and game with friends!{' '}
            We have gaming channels set up for different games and to allow you to jump in!
          </p>
          <Anchor
            label='Link to Discord'
            url='https://discord.gg/KBRdaXSPu6'
            size='lg'
          />
        </TextCard>
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <TextCard>
          <h1>VRChat links coming soon!</h1>
        </TextCard>
      </Section>
    </>
  )
}
