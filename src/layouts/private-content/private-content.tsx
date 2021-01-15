import React, { Component, ComponentType, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity-widget'
import UnauthorizedNotice from '../../components/unathorized-notice/unathorized-notice'

interface PrivateContentProps extends RouteComponentProps {
  as: React.ComponentType
  allowedRoles?: string[]
  callbackPath?: string 
}

const PrivateContent: React.FC<PrivateContentProps> = ({ as, allowedRoles, callbackPath, ...props }) => {
  const identity = useIdentityContext()

  const doesUserHaveAllowedRoles = (): boolean =>
    (allowedRoles !== undefined && allowedRoles.some(role => identity.user?.app_metadata?.roles?.indexOf(role) >= 0)) || !allowedRoles

  return (
    identity.user !== undefined
      ? doesUserHaveAllowedRoles()
        ? <Component {...props} />
        : <Unauthorized />
      : <Unauthorized />
  )
}

export default PrivateContent

interface UnauthorizedProps {
  callbackPath?: string
}

const Unauthorized: React.FC<UnauthorizedProps> = ({ callbackPath }) => {
  useEffect(() => {
    callbackPath !== undefined &&
      navigate(
        '/login', 
        {
          state: { 
            navigateTarget: callbackPath 
          }
        }
      )
  }, [callbackPath])

  return (
    callbackPath !== undefined
      ? <></>
      : <UnauthorizedNotice />
  )
}
