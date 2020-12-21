import React, { useEffect } from 'react'
import emergence from 'emergence.js'

import Navibar from '../navibar/navibar'
import Footer from '../footer/footer'
import config from '../../../site-config'

import 'modern-normalize/modern-normalize.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

interface Props {
  children?: React.ReactNode
  location: Location
}

const Layout: React.FC<Props> = ({ children, location }: Props) => {
  useEffect(() => {
    emergence.init()
  })

  return (
    <>
      <Navibar location={location} />
      <div className='layout-container d-flex flex-column justify-content-between bg-image'>
        { children }
        <Footer copyright={config.copyright} />
      </div>
    </>
  )
}

export default Layout
