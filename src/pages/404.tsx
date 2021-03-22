import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../site-config'

import {
  Meta,
  TextCard
} from '../components'

import Img from 'gatsby-image'

import {
  Event,
  Section
} from '../layouts'

import Button from 'react-bootstrap/Button'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.NotFoundQueryQuery
}

/**
 * The 404 page.
 * @param {WindowLocation<unknown>} location the location of this page.
 */
const NotFound: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const marty404 = data?.marty404?.childImageSharp?.fluid

  return (
    <Event location={location}>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <h1>404</h1>
            {marty404 !== undefined && <Img
              fluid={marty404}
              className='img-fluid'
              alt='Picture of Marty, the Pixel Purrfect mascot, shrugging with the number 404 behind him'
            />}
            <p>
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
            <Button
              type='button'
              title='Return to the last page you were on'
              onClick={() => { navigate !== undefined && navigate(-1) }}
              size='lg'
              variant='secondary'
            >
              Go Back
            </Button>
          </TextCard>
        </Section>
      </div>
    </Event>
  )
}

export default NotFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    marty404: file(relativePath: { eq: "404_75dpi.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
