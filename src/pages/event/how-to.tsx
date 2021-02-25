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

const HowTo: React.FC<Props> = ({ location }: Props) => {
  const Content = makePrivateContent(HowToContent)

  return (
    <Event location={location}>
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
      <Jumbotron title={'Discord & VR'} subtitle='' />
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <h1>Nothing to see here...</h1>
          </TextCard>
        </Section>
    </>
  )
}
