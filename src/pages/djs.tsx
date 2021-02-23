import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'

import Meta from '../components/meta'
import Layout from '../layouts/layout'

import config from '../../site-config'
import Jumbotron from '../components/jumbotron'
import Section from '../layouts/section'
import { DealerCard, TextCard } from '../components/cards'

interface Props extends RouteComponentProps {}

const Djs: React.FC<Props> = ({ location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`DJs | ${config.siteTitle}`} />
      <Meta customDescription='DJs' />
      <div>
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
      </div>
    </Layout>
  )
}

export default Djs
