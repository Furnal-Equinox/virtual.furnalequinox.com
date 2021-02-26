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

const Djs: React.FC<Props> = ({ location, navigate }: Props) => {
  const Content = makePrivateContent(DjsContent)

  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`DJs | ${config.siteTitle}`} />
      <Meta customDescription='DJs' />
      <div>
        <Content
          location={location}
          callbackPath='/event/djs/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default Djs

const DjsContent: React.FC<Props> = ({ location }: Props) => {
  return (
    <>
      <Jumbotron title='DJs' subtitle='' />
      <Section isContainer isTextCenter pos='middle'>
        <TextCard>
          <h1>Coming soon!</h1>
        </TextCard>
      </Section>
    </>
  )
}
