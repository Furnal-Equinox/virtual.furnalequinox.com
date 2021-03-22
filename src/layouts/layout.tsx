import React from 'react'
import { RouteComponentProps } from '@reach/router'

import {
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

const Layout: React.FC<Props> = ({ children, location, navigate }: Props) => {
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
      <LogoNavbar location={location} navigate={navigate} />
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

export default Layout
