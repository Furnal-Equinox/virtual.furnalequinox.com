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
      <div className='container py-5'>
        <DonationsMeter />
      </div>
      <Section isContainer pos='middle'>
        <TextCard>
          <div className='alert alert-warning' role='alert'>
            <p className='visually-hidden'>
              Warning:{' '}
            </p>
            <p className='mb-0'>
              The donations meter is currently inaccurate.{' '}
              We have found a bug with RegFox that is causing donations after 10 AM EDT March 17 to count twice.{' '}
              We are investigating and will correct the donations meter when the problem with RegFox is resolved.{' '}
              If all else fails, we'll figure out a different way to calculate the amount for the meter.
            </p>
          </div>
        </TextCard>
      </Section>
    </ComponentDisplay>
  )
}

export default DonationsMeterPage
