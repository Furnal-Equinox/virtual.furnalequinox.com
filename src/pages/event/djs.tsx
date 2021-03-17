import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import config from '../../../site-config'

import {
  DJLineup,
  Jumbotron,
  Meta,
  TextCard
} from '../../components'

import {
  Event,
  makePrivateContent,
  Section
} from '../../layouts'

import Img from 'gatsby-image'

interface Props extends RouteComponentProps {
  data: GatsbyTypes.DJsQueryQuery
}

const Djs: React.FC<Props> = ({ data, location, navigate }: Props) => {
  const Content = makePrivateContent(DjsContent)

  return (
    <Event location={location} navigate={navigate}>
      <Helmet title={`DJs | ${config.siteTitle}`} />
      <Meta customDescription='DJs' />
      <div>
        <Content
          data={data}
          location={location}
          callbackPath='/event/djs/'
          allowedRoles={['free']}
        />
      </div>
    </Event>
  )
}

export default Djs

export const djsQuery = graphql`
  query DJsQuery {
    remark: markdownRemark(fileAbsolutePath: { regex: "/djs.md/" }) {
      frontmatter {
        djLineup {
          friday {
            time
            dj
          }
          saturday {
            time
            dj
          }
          sunday {
            time
            dj
          }
        }
      }
    }
    djLineupImg: file(relativePath: { eq: "dj-lineup.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const DjsContent: React.FC<Props> = ({ data, location }: Props) => {
  const djLineupImg = data?.djLineupImg?.childImageSharp?.fluid
  return (
    <>
      <Jumbotron title='DJs' subtitle='' />
      <Section isContainer isTextCenter pos='middle'>
        <TextCard>
          {djLineupImg !== undefined && <Img
            fluid={djLineupImg}
            className='img-fluid rounded-3'
            alt={[
              'This image shows the DJ lineup for Pixel Purrfect.',
              'For your convenience, we have reproduced the lineup below as three tables:',
              'one for Friday, one for Saturday, and one for Sunday.'
            ].join(' ')}
            aria-labelledby='lineup-table'
          />}
        </TextCard>
      </Section>
      <Section isContainer isTextCenter pos='middle' id='lineup-table'>
        <div className='visually-hidden'>
          Here, you will find a table of the times our DJs are playing. The table here is a{' '}
          reproduction of the table in the image. We have three tables here: one for each day of our convention.
          Please note that the AM times in the table refer to the next day - our DJs play overnight!
        </div>
        <DJLineup />
      </Section>
    </>
  )
}
