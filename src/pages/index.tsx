import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../../site-config'
import { LoginQueryQuery } from '../../../types/graphql-types'

import {
  LoginCard,
  LoginForm,
  Meta
} from '../components'

import Img from 'gatsby-image'

import { Layout } from '../layouts'

interface Props extends RouteComponentProps {
  data: LoginQueryQuery
}

interface LocationState {
  navigateTarget?: string
}

const Login: React.FC<Props> = ({ data, location }: Props) => {
  const navigateTarget: string = (location?.state as LocationState)?.navigateTarget ?? '/event/'

  return (
    <Layout location={location}>
      <Helmet title={`Login | ${config.siteTitle}`} />
      <Meta />
      <div className='container align-items-center'>
        <Img
          fluid={data.pixelBanner.childImageSharp.fluid}
          className='img-fluid'
          alt='Picture of the banner for Pixel Purrfect'
        />
        <LoginCard>
          <h1 className='card-title'>Welcome!</h1>
          <div>
            <LoginForm navigateTarget={navigateTarget} />
          </div>
        </LoginCard>
      </div>
    </Layout>
  )
}

export default Login

export const loginQuery = graphql`
  query LoginQuery {
    pixelBanner: file(relativePath: { eq: "VFE-2021-logo-TEXT-big.png" }) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
