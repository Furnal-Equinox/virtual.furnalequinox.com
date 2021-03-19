import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import {
  DonationsMeter,
  Meta,
  TextCard
} from '../components'

import {
  Section
} from '../layouts'

import { ComponentDisplay } from '../layouts'

interface Props extends RouteComponentProps {}

const DonationsMeterPage: React.FC<Props> = () => {
  return (
    <ComponentDisplay>
      <Helmet title={`Donations Meter | ${config.siteTitle}`} />
      <Meta />
      <Section isContainer pos='middle'>
        <DonationsMeter />
      </Section>
    </ComponentDisplay>
  )
}

export default DonationsMeterPage
