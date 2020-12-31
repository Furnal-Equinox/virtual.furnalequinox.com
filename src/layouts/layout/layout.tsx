import React, { useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import emergence from 'emergence.js'

import Navibar from '../../components/navibar/navibar'
import Footer from '../../components/footer/footer'
import config from '../../../site-config'

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
