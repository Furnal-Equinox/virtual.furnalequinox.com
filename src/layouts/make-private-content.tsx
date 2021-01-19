import React, { Component, ComponentType, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { doesUserHaveAllowedRoles, Identity } from '../utils/identity'
import UnauthorizedNotice from '../components/unathorized-notice'

interface PrivateContentProps extends RouteComponentProps {
  allowedRoles?: string[]
  callbackPath?: string 
}

const makePrivateContent = 
  <Props extends object>(Comp: React.ComponentType<Props>): React.FC<Props & PrivateContentProps> => 
    ({ allowedRoles, callbackPath, ...props }: PrivateContentProps) => {
      const identity = useIdentityContext()

      return (
        identity.user !== undefined
          ? doesUserHaveAllowedRoles(identity as Identity, allowedRoles)
            ? <Comp {...props as Props} />
            : <Unauthorized />
          : <Unauthorized />
      )
    }

export default makePrivateContent

interface UnauthorizedProps {
  callbackPath?: string
}

const Unauthorized: React.FC<UnauthorizedProps> = ({ callbackPath }) => {
  useEffect(() => {
    callbackPath !== undefined &&
      navigate(
        '/login', 
        { state: { navigateTarget: callbackPath } }
      )
  }, [callbackPath])

  return (
    callbackPath !== undefined
      ? <></>
      : <UnauthorizedNotice />
  )
}
