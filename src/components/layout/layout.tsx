import React, { useEffect } from 'react'
import emergence from 'emergence.js'

import Navibar from '../navibar/navibar'
import Footer from '../footer/footer'
import { siteMetadata } from '../../../gatsby-config'

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
    <div>
      <Navibar title={siteMetadata.title} location={location} />
      <section className='py-5'>
        { children }
      </section>
      <Footer title={siteMetadata.title} author={siteMetadata.author.name} />
    </div>
  )
}

export default Layout
