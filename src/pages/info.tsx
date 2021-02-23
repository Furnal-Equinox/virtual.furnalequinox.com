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

const Info: React.FC<Props> = ({ location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Info | ${config.siteTitle}`} />
      <Meta customDescription='Information' />
      <div>
        <Jumbotron title='Info' subtitle='' />
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h1>Our Charity</h1>
                <img
                  src='https://http.cat/100'
                  className='rounded-3'
                  alt='Image of a jumping cat that appears to be floating in mid-air like a ball of fluff'
                />
                <p className='lead'>
                  Please donate to our charity!
                </p>
              </div>
            </div>
          </TextCard>
        </Section>
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h1>Affiliate Canadian Conventions</h1>
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
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h1>Credits</h1>
                <p className='lead'>
                  This website was made possible by
                </p>
              </div>
            </div>
          </TextCard>
        </Section>
      </div>
    </Layout>
  )
}

export default Info
