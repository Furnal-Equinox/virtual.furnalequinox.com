import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import Meta from '../components/meta'
import Layout from '../layouts/layout'
import Section from '../layouts/section'
import { TextCard } from '../components/cards'

interface Props extends RouteComponentProps {}

/**
 * The 404 page.
 * @param {WindowLocation<unknown>} location the location of this page.
 */
const NotFound: React.FC<Props> = ({ location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
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
                    title="Ardal's email address"
                    href='mailto:ardal@furnalequinox.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Ardal
                  </a>.
                </p>
              </div>
            </div>
          </TextCard>
        </Section>
      </div>
    </Layout>
  )
}

export default NotFound
