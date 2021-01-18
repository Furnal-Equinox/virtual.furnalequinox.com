import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta'
import Layout from '../layouts/layout'

import config from '../../site-config'
import Jumbotron from '../components/jumbotron'
import Section from '../layouts/section'

interface Props extends RouteComponentProps {}

const Help: React.FC<Props> = ({ location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Help | ${config.siteTitle}`} />
      <Meta customDescription='Help' />
      <div>
        <Jumbotron title='Help' subtitle='' />
        <Section isContainer isTextCenter pos='last'>
        </Section>
      </div>
    </Layout>
  )
}

export default Help
