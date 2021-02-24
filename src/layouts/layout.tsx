import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import emergence from 'emergence.js'

import {
  AuthOverlay,
  Footer,
  LogoNavbar
} from '../components'

import config from '../../site-config'

import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

interface Props extends RouteComponentProps {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children, location }: Props) => {
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
      <LogoNavbar location={location} />
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

export default Layout
