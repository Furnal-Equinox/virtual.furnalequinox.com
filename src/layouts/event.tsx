import React from 'react'
import { RouteComponentProps } from '@reach/router'

import {
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
      <MainNavbar location={location} />
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

export default Event
