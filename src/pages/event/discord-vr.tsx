import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'
import { Link as GatsbyLink } from 'gatsby'
 
import {
  Anchor,
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

const DiscordVR: React.FC<Props> = ({ location, navigate }: Props) => {
  const Content = makePrivateContent(DiscordVRContent)

  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`Discord & VR | ${config.siteTitle}`} />
      <Meta customDescription='Information about the Discord and the VRChat worlds' />
      <div>
        <Content
          location={location}
          callbackPath='/event/discord-vr/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default DiscordVR

const DiscordVRContent: React.FC<Props> = ({ location }: Props) => {
  return (
    <>
      <Jumbotron title={'Discord & VR'} subtitle='' />
      <Section isContainer isTextCenter pos='middle'>
        <TextCard>
          <h1>Discord</h1>
          <p>
            Come and join other furries in our dedicated discord server!{' '}
            You can talk to dealers, ask questions to panelists and game with friends!{' '}
            We have gaming channels set up for different games and to allow you to jump in!
          </p>
          <Anchor
            label='Link to Discord'
            url='https://discord.gg/KBRdaXSPu6'
            size='lg'
          />
        </TextCard>
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <TextCard>
          <h1>VRChat</h1>
          <div className='py-3'>
            <p>
              Here are the links to the launch pages for the different worlds available during Virtual Furnal Equinox!{' '}
              Visit our{' '}
              <GatsbyLink
                title='Link to the how to page on this website'
                to='/event/how-to/'
              >how-to page
              </GatsbyLink>{' '}
              for tutorials on using VRchat!
            </p>
          </div>
          <div className='py-3'>
            <h2>Hotel</h2>
            <p>
              This world is the main hub, and it contains portals to all the other worlds!
            </p>
            <Anchor
              label='Link to the hotel world'
              url='https://vrchat.com/home/world/wrld_dab24f34-f0b5-430a-a13a-90b364a61935'
              size='lg'
            />
          </div>
          <div className='py-3'>
            <h2>Dealers Den</h2>
            <p>
              Explore our Den and see the work of more than 60 artists of the furry fandom!
            </p>
            <Anchor
              label='Link to the dealers den world'
              url='https://vrchat.com/home/world/wrld_2fcb30b5-f771-46e4-bd59-28b19cb0aebd'
              size='lg'
            />
          </div>
          <div className='py-3'>
            <h2>DanceFloor</h2>
            <p>
              Enjoy our DJs on their livestream!
            </p>
            <Anchor
              label='Link to the dancefloor world'
              url='https://vrchat.com/home/world/wrld_4b5cf0b1-a4ce-4bbe-ae7f-bd45c7fad99c'
              size='lg'
            />
          </div>
          <div className='py-3'>
            <h2>Main Stage</h2>
            <p>
              Join others to watch the Opening ceremony and the on-going livestream!
            </p>
            <Anchor
              label='Link to the main stage world'
              url='https://vrchat.com/home/world/wrld_2215bab6-d5e8-46f4-8679-0fb39eae2dee'
              size='lg'
            />
          </div>
          <div className='py-3'>
            <h2>Lounge</h2>
            <p>
              Come and chillax on this remote island while browsing the art gallery!
            </p>
            <Anchor
              label='Link to the lounge world'
              url='https://vrchat.com/home/world/wrld_21f190e4-875e-492b-9fee-58499b28e655'
              size='lg'
            />
          </div>
          <div className='py-3'>
            <h2>Pool</h2>
            <p>
              The hotel pool is the perfect place to relax after a long day of con going!
            </p>
            <Anchor
              label='Link to the pool world'
              url='https://vrchat.com/home/world/wrld_44528b80-c784-4ffa-9543-5afb4b4ef1c9'
              size='lg'
            />
          </div>
        </TextCard>
      </Section>
    </>
  )
}
