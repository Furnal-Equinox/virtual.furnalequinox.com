import React from 'react'

import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

interface Props {
  location: Location
}

const NotFound: React.FC<Props> = ({ location }: Props) => {
  return (
    <Layout location={ location } >
      <Meta />
      <div>
        <section className='container py-3 py-lg-5 text-center'>
          <div className='row'>
            <div className='col mx-auto'>
              <h1>404</h1>
              <img 
                src='https://http.cat/404' 
                className='rounded-3' 
                alt='Image of a cat hiding under some papers' 
              />
              <p className='lead'>
                Oops! We couldn't find the page you were looking for.<br />
                Please go back and try again.<br />
                If you think you've found an error, email{' '}
                <a
                  href='mailto:ardal@furnalequinox.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Ardal
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NotFound
