import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../../../site-config'

import {
  Jumbotron,
  Meta,
  ResponsiveYouTubePlayer,
  TextCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

import { Document } from 'react-pdf'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.HowToQueryQuery
}

const HowTo: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const Content = makePrivateContent(HowToContent)

  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`How To | ${config.siteTitle}`} />
      <Meta customDescription='Tutorials on how to join and use Discord and the VRChat worlds' />
      <div>
        <Content
          data={data}
          location={location}
          callbackPath='/event/how-to/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default HowTo

export const howToQuery = graphql`
  query HowToQuery {
    vrChatAvatarPDF: file(relativePath: { eq: "VRChat-Add-Your-Badge-Tutorial-Script.pdf" }) {
      publicURL
    }
  }
`

const HowToContent: React.FC<Props> = ({ data, location }: Props) => {
  const vrChatAvatarPDF = data?.vrChatAvatarPDF

  return (
    <>
      <Jumbotron title='How To' subtitle='Tutorials to help you make the most of Pixel Purrfect!' />
      <Section isContainer isTextCenter pos='middle'>
        <TextCard>
          <h2>
            VRChat Avatar Tutorial
          </h2>
          <p>
            How to setup your own VRChat avatar with Unity,{' '}
            add your badge to your avatar,{' '}
            and test and upload your avatar to VRChat!
          </p>
          <p className='visually-hidden'>
            We have a PDF transcript below the video!
          </p>
          <ResponsiveYouTubePlayer
            url='https://youtu.be/p9hEg4u2fxE'
            title={[
              "Our YouTube video tutorial showing you how to setup your own avatar,",
              "add your badge to it, and upload it to VRChat!"
            ].join(' ')}
          />
          <p className='text-warning'>
            Open the video in fullscreen if the details are too small to view here,{' '}
            especially if you are using a phone!
          </p>
          <a
            title='Click this to download the VRChat avatar tutorial PDF'
            href={vrChatAvatarPDF?.publicURL}
            className='btn btn-primary btn-lg rounded-3 m-3'
            download
          >
            Download transcript
          </a>
        </TextCard>
      </Section>
    </>
  )
}
