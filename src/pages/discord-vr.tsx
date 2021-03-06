import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {
  Jumbotron,
  Meta,
  TextCard
} from '../components'

import {
  Event,
  Section
} from '../layouts'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.DiscordVRQueryQuery
}

const DiscordVR: React.FC<Props> = ({ data, location, navigate }: Props) => {
  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`Discord & VR | ${config.siteTitle}`} />
      <Meta customDescription='Information about the Discord and the VRChat worlds' />
      <div>
        <DiscordVRContent
          data={data}
          location={location}
        />
      </div>
    </Event>
  )
}

export default DiscordVR

export const discordVRQuery = graphql`
  query DiscordVRQuery {
    howToBlockPoster: file(relativePath: { eq: "HowToBlockPoster.png" }) {
      childImageSharp {
        ...MediumImage
      }
    }
    attendeeBadgeExamples: file(relativePath: { eq: "attendee-badge-examples.png" }) {
      childImageSharp {
        ...MediumImage
      }
    }
  }
`

const DiscordVRContent: React.FC<Props> = ({ data, location }: Props) => {
  const howToBlockPoster = getImage(data?.howToBlockPoster)

  return (
    <>
      <Jumbotron title={'Discord & VR'} subtitle='' />
      <Section isContainer isTextCenter pos='middle' id='discord'>
        <TextCard>
          <h1>{"Discord"}</h1>
          <p>
            {"Come and join other furries in our dedicated discord server!"}{' '}
            {"You can talk to dealers, ask questions to panelists and game with friends!"}{' '}
            {"We have gaming channels set up for different games and to allow you to jump in!"}
          </p>
          <a
            title={'Link to the Discord invite for the Furnal Equinox Discord server'}
            href='https://discord.com/invite/furnal-equinox'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary btn-lg rounded-3'
          >
            {"Discord"}
          </a>
          <p>
            {"New to Discord? We have a tutorial just for you on our How-To page!"}
          </p>
          <Link
            title={'Link to the Discord tutorial on the How-To page'}
            to='/how-to/#discord'
            className='btn btn-secondary btn-lg rounded-3'
          >
            {"Tutorial"}
          </Link>
        </TextCard>
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <TextCard>
          <h1>{"Safety in VRChat"}</h1>
          <div className='alert alert-warning' role='alert'>
            <p className='visually-hidden'>
              {"Warning:"}{' '}
            </p>
            <h2 className='alert-heading'>{"Hold on!"}</h2>
            <p>
              {"Before you hop into VRChat, please read this section carefully!"}
            </p>
            <hr />
            <p className='mb-0'>
              {"Furnal Equinox staff cannot control public instances in VRChat,"}{' '}
              {"so it's up to you to choose who to interact with."}{' '}
              {"Have a fun and exciting convention!"}
            </p>
          </div>
          {howToBlockPoster !== undefined && <GatsbyImage
            image={howToBlockPoster}
            className='img-fluid rounded-3'
            alt={[
              "This image reads'",
              'if someone is being a pest, you can get rid of them fast by following these steps!',
              '1. Open your menu by pressing the menu button on your VR controller, or the escape key on a PC!',
              '2. Select the user by putting the little white circle cursor over their avatar.',
              'They will look like a silhouette with a blue capsule outline!',
              "3. Toggle the 'Not Blocked / Blocked' button to block them. If they were doing something very bad,",
              "click 'Report User' as well!",
              'Furnal Equinox staff cannot control public instances in VRChat,',
              "so it's up to you to choose who to interact with.",
              'Have a fun and exciting convention!'
            ].join(' ')}
          />}
        </TextCard>
      </Section>
      <Section isContainer isTextCenter pos='middle'>
        <TextCard>
          <h1>{"VRChat World Links"}</h1>
          <div className='alert alert-info' role='alert'>
            <p className='visually-hidden'>
              {"Info:"}{' '}
            </p>
            <h2 className='alert-heading'>{"No VR headset?"}</h2>
            <p className='mb-0'>
              {"No worries! You don't need a VR headset to play VRChat!"}{' '}
              {"Just launch VRChat in Desktop mode instead!"}
            </p>
          </div>
          <p className='h4'>
            {"Search for the FE worlds in VRChat!"}
          </p>
        </TextCard>
      </Section>
    </>
  )
}
