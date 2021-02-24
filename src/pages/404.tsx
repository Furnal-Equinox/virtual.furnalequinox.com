import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../site-config'
import { NotFoundQueryQuery } from '../../../types/graphql-types'

import { 
  Meta,
  TextCard
} from '../components'

import Img from 'gatsby-image'

import {
  Layout,
  Section
} from '../layouts'

interface Props extends RouteComponentProps {
  data: NotFoundQueryQuery
}

/**
 * The 404 page.
 * @param {WindowLocation<unknown>} location the location of this page.
 */
const NotFound: React.FC<Props> = ({ data, location }: Props) => {
  return (
    <Layout location={location}>
      <Helmet title={`404 | ${config.siteTitle}`} />
      <Meta />
      <div>
        <Section isContainer isTextCenter pos='middle'>
          <TextCard>
            <h1>404</h1>
            <Img
              fluid={data.marty.childImageSharp.fluid}
              className='img-fluid'
              alt='Picture of Marty, the Pixel Purrfect mascot, shrugging with the number 404 behind him'
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
          </TextCard>
        </Section>
      </div>
    </Layout>
  )
}

export default NotFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    marty: file(relativePath: { eq: "404_75dpi.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
