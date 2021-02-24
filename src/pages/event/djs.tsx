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

const Djs: React.FC<Props> = ({ location }: Props) => {
  const Content = makePrivateContent(DjsContent)

  return (
    <Event location={location}>
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
            <div className='row'>
              <div className='col mx-auto'>
                <h1>Our DJs</h1>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <DealerCard />
                    </div>
                    <div className='col-lg-12'>
                      <DealerCard />
                    </div>
                    <div className='col-lg-12'>
                      <DealerCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TextCard>
        </Section>
    </>
  )
}
