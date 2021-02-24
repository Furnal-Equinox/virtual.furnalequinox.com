import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import emergence from 'emergence.js'

import {
  AuthOverlay,
  Footer,
  MainNavbar
} from '../components'

import config from '../../site-config'

import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

interface Props extends RouteComponentProps {
  children?: React.ReactNode
}

const Event: React.FC<Props> = ({ children, location }: Props) => {
  const identity = useIdentityContext()

  useEffect(() => {
    emergence.init()
  })

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
      <MainNavbar location={location} identityContext={identity} />
      <div className='layout-container d-flex flex-column justify-content-between bg-image'>
        {children}
        <Footer
          copyright={config.copyright}
          socialLinks={socialLinks}
        />
      </div>
    </>
  )
}

export default Event
