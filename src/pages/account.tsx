import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import Layout from '../layouts/layout'
import Meta from '../components/meta'
import makePrivateContent from '../layouts/make-private-content'
import Section from '../layouts/section'
import { TextCard } from '../components/cards'

interface Props extends RouteComponentProps {}

const Account: React.FC<Props> = ({ location }: Props) => {
  const identity = useIdentityContext()
  const [processing, setProcessing] = useState<boolean>(false)

  const Content = makePrivateContent(MyAccount)

  return (
    <Layout location={location}>
      <Helmet title={`Account | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Content
          callbackPath='/account/'
          allowedRoles={['free']}
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
            <h1>Welcome to your account!</h1>
            <img 
              src='https://http.cat/200' 
              className='rounded-3' 
              alt='Image of a cat hiding under some papers' 
            />
            <p className='lead'>
              This page is for your eyes only! 😎
            </p>
          </div>
        </div>
      </TextCard>
    </Section>
  )
}
