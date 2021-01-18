import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import logo from '../../../content/images/logo.png'

import './style.scss'

import { Button, Link } from '../index'

import { NavbarLinks, NavbarAccountLinks } from '../../data/navbar-links'

export interface Props extends RouteComponentProps {
  identityContext?: any
}

const Navibar: React.FC<Props> = ({ location, identityContext }: Props) => {
  const identity = useIdentityContext()

  const Logo = () =>
    <GatsbyLink className='navbar-brand mr-2' to='/'>
      <img src={logo} height='64' className='d-inline-block mb-0' alt='Furnal Equinox logo' />
    </GatsbyLink>

  const HamburgerMenu = () =>
    <button 
      className='navbar-toggler' 
      type='button' 
      data-bs-toggle='collapse' 
      data-bs-target='#navbarCollapse' 
      aria-controls='navbarCollapse' 
      aria-expanded='false' 
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon' />
    </button>

  const CollapsibleLinks = () =>
    <div className='collapse navbar-collapse' id='navbarCollapse'>
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        {NavbarLinks.map(elem => 
          <li 
            key={elem.name}
            className={
              location !== undefined &&
              location?.pathname === elem.to 
                ? 'nav-item active' 
                : 'nav-item'
            }
          >
            <GatsbyLink to={elem.to} className='nav-link'>
              {elem.name}
            </GatsbyLink>
          </li> 
        )}
      </ul>
    </div>

  const Notification = () => 
    <span className='navbar-text'>
      {identity.provisionalUser !== undefined
        ? 'Check your email!'
        : `Hello, ${identity.user?.user_metadata?.full_name?.split(' ')[0] ?? 'stranger'}!`
      }
    </span>

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white sticky-top py-0'>
      <div className='container'>
        <Logo />

        <Notification />

        <HamburgerMenu />

        <CollapsibleLinks />

        {(identity.user === undefined && identity.provisionalUser === undefined) &&
          <Link label='Sign up' to='/sign-up/' />
        }
        {identity.user !== undefined
          ? <>
              <Link label='Settings' to='/account/' />
              <Button label='Logout' onClick={identity.logout} />
            </>
          : <>
              <Link label='Login' to='/login/' />
            </>
        }
      </div>
    </nav>
  )
}

export default Navibar
