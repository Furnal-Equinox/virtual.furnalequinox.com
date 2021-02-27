import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useIdentityContext } from 'react-netlify-identity-gotrue'

import {
  AuthOverlay,
  Footer,
  FakeNavbar
} from '../components'

import config from '../../site-config'

import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

interface Props extends RouteComponentProps {
  children?: React.ReactNode
}

const FakeEvent: React.FC<Props> = ({ children, location }: Props) => {
  const identity = useIdentityContext()

  const socialLinks = {
    data: {
      facebook: config.userLinks.facebook,
      flickr: config.userLinks.flickr,
      twitter: config.userLinks.twitter,
      youtube: config.userLinks.youtube
    }
  }

  return (
    <>
      <AuthOverlay />
      <FakeNavbar location={location} identityContext={identity} />
      <div className='layout-container d-flex flex-column justify-content-between'>
        {children}
        <Footer
          copyright={config.copyright}
          socialLinks={socialLinks}
        />
      </div>
    </>
  )
}

export default FakeEvent
