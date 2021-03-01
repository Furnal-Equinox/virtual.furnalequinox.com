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
import { graphql } from 'gatsby'

interface Props extends RouteComponentProps {}

const Info: React.FC<Props> = ({ location, navigate }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`Info | ${config.siteTitle}`} />
      <Meta customDescription='Information' />
      <div>
        <Jumbotron title='Info' subtitle='' />
        <Section isContainer>
          <TextCard>
            <Button
                type='button'
                title='Return to the last page you were on'
                onClick={() => { navigate !== undefined && navigate(-1) }}
                size='lg'
                variant='secondary'
              >
                Go Back
              </Button>
          </TextCard>
        </Section>
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <div className='row'>
              <div className='col mx-auto'>
                <h1>Our Charity</h1>
                <h2>Hobbitstee Wildlife Refuge</h2>
                <p className='py-3'>
                  This year’s charity is none other than Hobbitstee Wildlife Refuge!
                </p>
                <p className='pb-3'>
                  Based in Jarvis, Ontario, Hobbitstee is an entirely volunteer-run wildlife rescue{' '}
                  that ranges all over southwestern Ontario.{' '}
                  If an animal lives outdoors and needs help, Hobbitstee has an army of volunteers{' '}
                  to go and rescue them. Like any non-profit, they always have resources they need,{' '}
                  and your donations this year will help fund things like a portable IV pump,{' '}
                  an expanded raptor enclosure (no, not dinosaurs!) and a permanent beaver habitat.{' '}
                  For more information, follow them on Facebook or visit their website to learn more!
                </p>
                <OutboundLink
                  title="Link to Hobbitstee Wildlife Refuge's website"
                  href='http://www.hobbitstee.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary btn-lg rounded-3'
                >
                  SUPPORT
                </OutboundLink>
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
                  <div className='row py-3'>
                    <div className='col'>
                      <OutboundLink
                        title="Link to Vancoufur's website"
                        href='https://vancoufur.org/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-lg rounded-3'
                      >
                        VANCOUFUR
                      </OutboundLink>
                    </div>
                  </div>
                  <div className='row py-3'>
                    <div className='col'>
                      <OutboundLink
                        title="Link to Fur Eh!'s website"
                        href='https://www.fureh.ca/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-lg rounded-3'
                      >
                        FUR EH!
                      </OutboundLink>
                    </div>
                  </div>
                  <div className='row py-3'>
                    <div className='col'>
                      <OutboundLink
                        title="Link to Anthro East Coast's website"
                        href='https://anthroeastcoast.ca/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-lg rounded-3'
                      >
                        ANTHRO EAST COAST
                      </OutboundLink>
                    </div>
                  </div>
                  <div className='row py-3'>
                    <div className='col'>
                      <OutboundLink
                        title="Link to Furality's website"
                        href='https://furality.org/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-lg rounded-3'
                      >
                        FURALITY
                      </OutboundLink>
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
          </TextCard>
        </Section>
        <Section isContainer>
          <TextCard>
            <Button
                type='button'
                title='Return to the last page you were on'
                onClick={() => { navigate !== undefined && navigate(-1) }}
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
