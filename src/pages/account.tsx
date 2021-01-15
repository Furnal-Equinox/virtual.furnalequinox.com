import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import Layout from '../layouts/layout/layout'
import Meta from '../components/meta/meta'
import PrivateContent from '../layouts/private-content/private-content'
import Section from '../layouts/section/section'
import { TextCard } from '../components/cards'

interface Props extends RouteComponentProps {}

const Account: React.FC<Props> = ({ location }: Props) => {
  const identity = useIdentityContext()
  const [processing, setProcessing] = useState<boolean>(false)

  return (
    <Layout location={location}>
      <Helmet title={`Account | ${config.siteTitle}`} />
      <Meta />
      <div>
        <PrivateContent
          as={MyAccount}
          callbackPath='/account/'
        />
      </div>
    </Layout>
  )
}

export default Account

const MyAccount: React.FC = () => {
  return (
    <Section isContainer isTextCenter pos='middle'>
      <TextCard>
        <div className='row'>
          <div className='col mx-auto'>
            <h1>404</h1>
            <img 
              src='https://http.cat/404' 
              className='rounded-3' 
              alt='Image of a cat hiding under some papers' 
            />
            <p className='lead'>
              Oops! We couldn't find the page you were looking for.<br />
              Please go back and try again.<br />
              If you think you've found an error, email{' '}
              <a
                href='mailto:ardal@furnalequinox.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ardal
              </a>.
            </p>
          </div>
        </div>
      </TextCard>
    </Section>
  )
}
