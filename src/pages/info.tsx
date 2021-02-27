import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import {
  DealerCard,
  Jumbotron,
  Meta,
  TextCard
} from '../components'

import {
  Layout,
  Section
} from '../layouts'

import Button from 'react-bootstrap/Button'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

interface Props extends RouteComponentProps {}

const Info: React.FC<Props> = ({ location, navigate }: Props) => {
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
        <Section isContainer isTextCenter pos='middle' id='credits'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h1>Credits</h1>
                <p className='lead'>
                  This website was made possible by
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <OutboundLink
                  href='https://www.netlify.com/'
                  title='Hosted by Netlify'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ height: '32px' }}
                >
                  <img src='https://www.netlify.com/img/press/logos/logomark.svg' alt='Deploys by Netlify' />
                </OutboundLink>
              </div>
            </div>
            <Button
              type='button'
              title='Return to the last page you were on'
              onClick={() => {navigate !== undefined && navigate(-1)}}
              size='lg'
              variant='secondary'
            >
              Go Back
            </Button>
          </TextCard>
        </Section>
      </div>
    </Layout>
  )
}

export default Info
