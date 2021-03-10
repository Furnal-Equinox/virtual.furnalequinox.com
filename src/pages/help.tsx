import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import { useIdentityContext } from 'react-netlify-identity-gotrue'

import Layout from '../layouts/layout'
import Section from '../layouts/section'
import config from '../../site-config'

import {
  ContactForm,
  Jumbotron,
  Meta,
  TextCard
} from '../components'

import Link from 'gatsby-link'

interface Props extends RouteComponentProps {}

const Help: React.FC<Props> = ({ location, navigate }: Props) => {
  const identity = useIdentityContext()
  return (
    <Layout location={location}>
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
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            {identity.user !== undefined
              ? <Link
                  title='Return to the event landing page if you are logged in'
                  to='/event/'
                  className='btn btn-secondary btn-lg rounded-3'
                >
                Return to Event
              </Link>
              : <Link
                  title='Return to the login page'
                  to='/'
                  className='btn btn-secondary btn-lg rounded-3'
                >
                Return to Login
              </Link>}
          </TextCard>
        </Section>
      </div>
    </Layout>
  )
}

export default Help
