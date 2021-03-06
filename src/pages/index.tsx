import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import config from '../../site-config'

import {
  DonationsMeter,
  Meta,
  TextCard
} from '../components'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {
  Event,
  Section
} from '../layouts'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.HomeQueryQuery
}

const Home: React.FC<Props> = ({ data, location, navigate }: Props) => {
  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Meta customDescription='The home of Furnal Equinox 2021: Pixel Purrfect' />
      <div>
        <HomeDashboard
          data={data}
          location={location}
        />
      </div>
    </Event>
  )
}

export default Home

export const homeQuery = graphql`
  query HomeQuery {
    martySkateboard: file(relativePath: { eq: "marty-skateboard.png" }) {
      childImageSharp {
        ...LargeImage
      }
    }
    pixelBanner: file(relativePath: { eq: "VFE-2021-logo-TEXT-big.png" }) {
      childImageSharp {
        ...LargeImage
      }
    }
  }
`

const HomeDashboard: React.FC<Props> = ({ data, location }: Props) => {
  const martySkateboard = getImage(data?.martySkateboard?.childImageSharp?.gatsbyImageData)
  const pixelBanner = getImage(data?.pixelBanner?.childImageSharp?.gatsbyImageData)

  return (
    <>
      <Section isContainer isTextCenter pos='middle'>
        {pixelBanner !== undefined && <GatsbyImage
          image={pixelBanner}
          className='img-fluid'
          alt='Picture of the banner for Pixel Purrfect'
        />}
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <div className='row'>
          <div className='col-lg-6 mb-3 mb-lg-0'>
            <TextCard>
              <h2>{"LIVESTREAM"}</h2>
              <p>
                {"We have events, panels, and DJs for you all weekend long!"}
              </p>
              <p>
                {"Click below to check out the livestream!"}
              </p>
              <Link
                title='Link to the Livestream page on this website'
                to='/livestream/'
                className='btn btn-primary btn-lg rounded-3'
              >
                {"Let's go!"}
              </Link>
            </TextCard>
          </div>
          <div className='col-lg-6 mt-3 mt-lg-0'>
            <TextCard>
              <h2>{"HOW TO"}</h2>
              <p>
                {"Wondering how to join the VRChat world and the Discord?"}
              </p>
              <p>
                {"We've got you covered! We've made some tutorial videos to help you join the fun!"}
              </p>
              <Link
                title='Link to the How To page on this website'
                to='/how-to/'
                className='btn btn-primary btn-lg rounded-3'
              >
                {"Let's go!"}
              </Link>
            </TextCard>
          </div>
        </div>
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <div className='row'>
          <div className='col'>
            <TextCard>
              <h2>{"WAYS TO JOIN THE FUN"}</h2>
              <p>
                {"There are a lot of ways to enjoy and participate in our virtual event!"}
              </p>
              <div className='row'>
                <div className='col-lg-4 p-3'>
                  <Link
                    title='Link to the Dealers Den page on this website'
                    to='/dealers/'
                    className='btn btn-secondary btn-lg rounded-3'
                  >
                    {"DEALERS DEN"}
                  </Link>
                </div>
                <div className='col-lg-4 p-3'>
                  <Link
                    title={'Link to the Discord & VR page on this website'}
                    to='/discord-vr/'
                    className='btn btn-primary btn-lg rounded-3'
                  >
                    {"DISCORD & VR"}
                  </Link>
                </div>
                <div className='col-lg-4 p-3'>
                  <a
                    title='Link to the Discord where you can learn more about gaming during Furnal Equinox'
                    href='https://discord.com/invite/furnal-equinox'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-secondary btn-lg rounded-3'
                  >
                    {"GAMING"}
                  </a>
                </div>
              </div>
            </TextCard>
          </div>
        </div>
      </Section>
      <Section isContainer pos='middle'>
        <DonationsMeter />
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <div className='row'>
          <div className='col'>
            <TextCard>
              <h2>{"DONATIONS"}</h2>
              <p>
                {"We made Pixel Purrfect a free event because we know it's important for everyone to gather"}{' '}
                {"together in these difficult times, and while we can't do a physical event, this is"}{' '}
                {"the next best thing. As a free event, this is accessible to as many furs as possible,"}{' '}
                {"and if you want to support the event, your donations are always welcome."}
              </p>
              <p>
                {"All proceeds donated to this event will be split 50/50 between Furnal Equinox and"}{' '}
                {"Hobbitstee Wildlife Refuge."}
              </p>
              <p>
                {"Please use the link below to go to our donation page."}
              </p>
              <a
                title='Link to our donation page on RegFox'
                href='https://fe.regfox.com/pixel-purrfect-donations'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary btn-lg rounded-3'
              >
                {"DONATE"}
              </a>
            </TextCard>
          </div>
        </div>
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        {martySkateboard !== undefined && <GatsbyImage
          image={martySkateboard}
          className='img-fluid'
          alt='Picture of Marty, the Pixel Purrfect mascot, jumping off of a skateboard'
        />}
      </Section>
    </>
  )
}
