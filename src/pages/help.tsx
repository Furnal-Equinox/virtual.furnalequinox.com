import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'

import Layout from '../layouts/layout'
import Section from '../layouts/section'
import config from '../../site-config'

import {
  Button,
  ContactForm,
  Jumbotron,
  Meta,
  TextCard
} from '../components'

interface Props extends RouteComponentProps {}

const Help: React.FC<Props> = ({ location, navigate }: Props) => {
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
            <Button
              label={"Return to the last page"}
              onClick={() => {navigate !== undefined && navigate(-1)}}
              size='lg'
              state='secondary'
            />
          </TextCard>
        </Section>
      </div>
    </Layout>
  )
}

export default Help
