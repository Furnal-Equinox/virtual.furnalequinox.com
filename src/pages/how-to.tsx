import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import {
  Jumbotron,
  Meta,
  ResponsiveYouTubePlayer,
  TextCard
} from '../components'

import {
  Event,
  Section
} from '../layouts'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.HowToQueryQuery
}

const HowTo: React.FC<Props> = ({ data, location, navigate }: Props) => {
  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`How To | ${config.siteTitle}`} />
      <Meta customDescription='Tutorials on how to join and use Discord and the VRChat worlds' />
      <div>
        <HowToContent
          data={data}
          location={location}
        />
      </div>
    </Event>
  )
}

export default HowTo

export const howToQuery = graphql`
  query HowToQuery {
    discordTutorialPDF: file(relativePath: { eq: "Discord-Basics.pdf" }) {
      publicURL
    }
    vrChatAvatarPDF: file(relativePath: { eq: "VRChat-Add-Your-Badge-Tutorial-Script.pdf" }) {
      publicURL
    }
    vrChatBasicsPDF: file(relativePath: { eq: "VRChat-Basics.pdf" }) {
      publicURL
    }
    vrChatFriendsPDF: file(relativePath: { eq: "VRChat-Friends.pdf" }) {
      publicURL
    }
    vrChatWorldsPDF: file(relativePath: { eq: "VRChat-Joining-Worlds.pdf" }) {
      publicURL
    }
    badgeAttendeeT1: file(relativePath: { eq: "Badge_T1_Attendee.unitypackage" }) {
      publicURL
    }
    badgeAttendeeT2: file(relativePath: { eq: "Badge_T2_Attendee.unitypackage" }) {
      publicURL
    }
  }
`

const HowToContent: React.FC<Props> = ({ data, location }: Props) => {
  const discordTutorialPDF = data?.discordTutorialPDF
  const vrChatAvatarPDF = data?.vrChatAvatarPDF
  const vrChatBasicsPDF = data?.vrChatBasicsPDF
  const vrChatFriendsPDF = data?.vrChatFriendsPDF
  const vrChatWorldsPDF = data?.vrChatWorldsPDF

  return (
    <>
      <Jumbotron title='How To' subtitle='Tutorials to help you make the most of Pixel Purrfect!' />
      <Section isContainer isTextCenter pos='middle' id='vrchat-basics'>
        <TextCard>
          <h2>
            {"VRChat Basics Tutorial"}
          </h2>
          <p>
            {"Learn the ropes of VRChat with our VRChat Basics tutorial!"}
          </p>
          <p className='visually-hidden'>
            {"We have a PDF transcript below the video!"}
          </p>
          <ResponsiveYouTubePlayer
            url='https://youtu.be/Zez7m1oL82s'
            title={'Our YouTube video tutorial showing you the basics of VRChat'}
          />
          <p className='text-warning'>
            {"Open the video in fullscreen if the details are too small to view here,"}{' '}
            {"especially if you are using a phone!"}
          </p>
          <a
            title='Click this to download the VRChat basics tutorial PDF'
            href={vrChatBasicsPDF?.publicURL}
            className='btn btn-primary btn-lg rounded-3 m-3'
            download
          >
            {"Download transcript"}
          </a>
        </TextCard>
      </Section>
      <Section isContainer isTextCenter pos='middle' id='vrchat-worlds'>
        <TextCard>
          <h2>
            {"VRChat Worlds Tutorial"}
          </h2>
          <p>
            {"Learn how to get around VRChat and check out worlds!"}
          </p>
          <p className='visually-hidden'>
            {"We have a PDF transcript below the video!"}
          </p>
          <ResponsiveYouTubePlayer
            url='https://youtu.be/NdakFOqFuEU'
            title={'Our YouTube video tutorial showing you how to get around VRChat and explore worlds'}
          />
          <p className='text-warning'>
            {"Open the video in fullscreen if the details are too small to view here,"}{' '}
            {"especially if you are using a phone!"}
          </p>
          <a
            title={'Click this to download the VRChat worlds tutorial PDF'}
            href={vrChatWorldsPDF?.publicURL}
            className='btn btn-primary btn-lg rounded-3 m-3'
            download
          >
            {"Download transcript"}
          </a>
        </TextCard>
      </Section>
      <Section isContainer isTextCenter pos='middle' id='vrchat-friends'>
        <TextCard>
          <h2>
            {"VRChat Friends Tutorial"}
          </h2>
          <p>
            {"Learn how to add people and make friends on VRChat!"}
          </p>
          <p className='visually-hidden'>
            {"We have a PDF transcript below the video!"}
          </p>
          <ResponsiveYouTubePlayer
            url='https://youtu.be/bif429deKks'
            title={'Our YouTube video tutorial showing you how to add people and make friends on VRChat'}
          />
          <p className='text-warning'>
            {"Open the video in fullscreen if the details are too small to view here,"}{' '}
            {"especially if you are using a phone!"}
          </p>
          <a
            title={'Click this to download the VRChat friends tutorial PDF'}
            href={vrChatFriendsPDF?.publicURL}
            className='btn btn-primary btn-lg rounded-3 m-3'
            download
          >
            {"Download transcript"}
          </a>
        </TextCard>
      </Section>
      <Section isContainer isTextCenter pos='middle' id='vrchat-avatar'>
        <TextCard>
          <h2>
            {"VRChat Avatar Tutorial"}
          </h2>
          <p>
            {"How to setup your own VRChat avatar with Unity,"}{' '}
            {"add your badge to your avatar,"}{' '}
            {"and test and upload your avatar to VRChat!"}
          </p>
          <p className='visually-hidden'>
            {"We have a PDF transcript below the video!"}
          </p>
          <ResponsiveYouTubePlayer
            url='https://youtu.be/p9hEg4u2fxE'
            title={[
              'Our YouTube video tutorial showing you how to setup your own avatar,',
              'add your badge to it, and upload it to VRChat!'
            ].join(' ')}
          />
          <p className='text-warning'>
            {"Open the video in fullscreen if the details are too small to view here,"}{' '}
            {"especially if you are using a phone!"}
          </p>
          <a
            title={'Click this to download the VRChat avatar tutorial PDF'}
            href={vrChatAvatarPDF?.publicURL}
            className='btn btn-primary btn-lg rounded-3 m-3'
            download
          >
            {"Download transcript"}
          </a>
        </TextCard>
      </Section>
      <Section isContainer isTextCenter pos='middle' id='discord'>
        <TextCard>
          <h2>
            {"Discord Tutorial"}
          </h2>
          <p>
            {"How to setup your Discord and join the FE Discord server!"}
          </p>
          <p className='visually-hidden'>
            {"We have a PDF transcript below the video!"}
          </p>
          <ResponsiveYouTubePlayer
            url='https://youtu.be/ibUUZw_XZSc'
            title={[
              'Our YouTube video tutorial showing you how to setup your Discord and join the FE Discord server!'
            ].join(' ')}
          />
          <p className='text-warning'>
            {"Open the video in fullscreen if the details are too small to view here,"}{' '}
            {"especially if you are using a phone!"}
          </p>
          <a
            title={'Click this to download the Discord Basics PDF'}
            href={discordTutorialPDF?.publicURL}
            className='btn btn-primary btn-lg rounded-3 m-3'
            download
          >
            {"Download transcript"}
          </a>
        </TextCard>
      </Section>
    </>
  )
}
