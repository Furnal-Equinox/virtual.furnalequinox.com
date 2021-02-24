import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../../site-config'
import { HomeQueryQuery } from '../../../types/graphql-types'

import {
  Anchor,
  Link,
  Meta,
  TextCard
} from '../../components'

import Img from 'gatsby-image'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

interface Props extends RouteComponentProps {
  data: HomeQueryQuery
}

const Home: React.FC<Props> = ({ data, location }: Props) => {
  const Content = makePrivateContent(HomeDashboard)

  return (
    <Event location={location}>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Content
          data={data}
          location={location}
          callbackPath='/event/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default Home

export const homeQuery = graphql`
  query HomeQuery {
    marty: file(relativePath: { eq: "marty-skateboard.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HomeDashboard: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <>
      <Section isContainer isTextCenter pos='middle'>
        <div className='row'>
          <div className='col-lg-6'>
            <TextCard>
              <h2>LIVESTREAM</h2>
              <p>
                We have events, panels, and DJs for you all weekend long!
              </p>
              <p>
                Click below to check out the livestream!
              </p>
              <Link
                label={"Let's go!"}
                to={`/livestream`}
                size='lg'
              />
            </TextCard>
          </div>
          <div className='col-lg-6'>
            <TextCard>
              <h2>HOW TO</h2>
              <p>
                Wondering how to join the VRChat world and the Discord?
              </p>
              <p>
                We've got you covered! We've made some tutorial videos to help you join the fun!
              </p>
              <Link
                label={"Let's go!"}
                to={`/how-to`}
                size='lg'
              />
            </TextCard>
          </div>
        </div>
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <div className='row'>
          <div className='col'>
            <TextCard>
              <h2>WAYS TO JOIN THE FUN</h2>
              <p>
                There are a lot of ways to enjoy and participate in our virtual event!
              </p>
              <div className='row'>
                <div className='col-lg-4 p-3'>
                  <Link
                    label={"DEALERS DEN"}
                    to={`/dealers`}
                    size='lg'
                    state='secondary'
                  />
                </div>
                <div className='col-lg-4 p-3'>
                  <Link
                    label={"DISCORD & VR"}
                    to={`/how-to`}
                    size='lg'
                  />
                </div>
                <div className='col-lg-4 p-3'>
                  <Link
                    label={"GAMING"}
                    to={`/how-to`}
                    size='lg'
                    state='secondary'
                  />
                </div>
              </div>
            </TextCard>
          </div>
        </div>
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <div className='row'>
          <div className='col'>
            <TextCard>
              <h2>DONATIONS</h2>
              <p>
                We made Pixel Purrfect a free event because we know it's important for everyone to gather{' '}
                together in these difficult times, and while we can't do a physical event, this is{' '}
                the next best thing. As a free event, this is accessible to as many furs as possible{' '}
                , and if you want to support the event, your donations are always welcome.
              </p>
              <p>
                All proceeds donated to this event will be split 50/50 between Furnal Equinox and{' '}
                Hobbitstee Wildlife Refuge.
              </p>
              <p>
                Please use the link below to go to our donation page.
              </p>
              <Anchor
                label={"DONATE"}
                url='https://fe.regfox.com/pixel-purrfect-donations'
                size='lg'
              />
            </TextCard>
          </div>
        </div>
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <Img
          fluid={data.marty.childImageSharp.fluid}
          className='img-fluid'
          alt='Picture of Marty, the Pixel Purrfect mascot, jumping off of a skateboard'
        />
      </Section>
    </>
  )
}