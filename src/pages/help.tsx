import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import {
  ContactForm,
  Jumbotron,
  Meta,
  TextCard
} from '../components'

import {
  Event,
  Section
} from '../layouts'

interface Props extends RouteComponentProps {}

const Help: React.FC<Props> = ({ location, navigate }: Props) => {
  return (
    <Event location={location}>
      <Helmet title={`Help | ${config.siteTitle}`} />
      <Meta customDescription='Help' />
      <div>
        <Jumbotron title='Help' subtitle='' />
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h1>Contact Us</h1>
                <p>
                  Do you have questions, comments, or suggestions?{' '}
                  Please send them using this form!
                </p>
                <ContactForm />
              </div>
            </div>
          </TextCard>
        </Section>
      </div>
    </Event>
  )
}

export default Help
