import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { Helmet } from 'react-helmet'
import config from '../../site-config'

import Layout from '../layouts/layout/layout'
import Meta from '../components/meta/meta'
import PrivateContent from '../layouts/private-content/private-content'

interface Props extends RouteComponentProps {}

const Account: React.FC<Props> = ({ location }: Props) => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)

  const isLoggedIn = identity.isLoggedIn

  return (
    <Layout location={location}>
      <Helmet title={`Account | ${config.siteTitle}`} />
      <Meta />
      <div>
      </div>
    </Layout>
  )
}

export default Account
