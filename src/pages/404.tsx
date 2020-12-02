import React from 'react'

import { siteMetadata } from '../../gatsby-config'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

interface Props {
  location: Location
}

const NotFound: React.FC<Props> = ({ location }: Props) => {
  return (
    <Layout location={ location } >
      <Meta site={ siteMetadata } title='404' />
      <div>
        <section className='text-center'>
          <div className='container'>
            <header>
              <h1>404</h1>
              <p className='h1'>Whoops!</p>
              <img src='https://http.cat/404' />
            </header>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NotFound
