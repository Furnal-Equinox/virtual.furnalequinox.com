import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import logo from '../../../../content/images/Logo.svg'

import { Button } from '../../index'

import { NavbarLinks } from '../../../data/navbar-links'
import { Maybe } from '../../../types'

export interface Props extends RouteComponentProps {
  identityContext?: any
}

const Navbar: React.FC<Props> = ({ location }: Props) => {
  const identity = useIdentityContext()

  const handleLogout: any = identity.logout

  const Logo: React.FC = () =>
    <GatsbyLink className='navbar-brand mr-2' to='/'>
      <img src={logo} height='64' className='d-inline-block mb-0' alt='Furnal Equinox logo' />
    </GatsbyLink>

  const HamburgerMenu: React.FC = () =>
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

  const CollapsibleLinks: React.FC = () =>
    <div className='collapse navbar-collapse' id='navbarCollapse'>
      <ul className='navbar-nav me-auto mb-2 mb-md-0'>
        {
          NavbarLinks.map(elem =>
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
          )
        }
        {
          (identity.user === undefined && identity.provisionalUser === undefined) &&
            <li
              key='Signup'
              className={
                location !== undefined &&
                location?.pathname === '/sign-up/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <GatsbyLink to='/sign-up/' className='nav-link'>
                Sign Up
              </GatsbyLink>
            </li>
        }
        {identity.user !== undefined
          ? <>
            <li
              key='Account'
              className={
                location !== undefined &&
                  location?.pathname === '/account/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <GatsbyLink to='/account/' className='nav-link'>
                My Account
              </GatsbyLink>
            </li>
            <li
              key='Logout'
            >
              <Button label='Logout' onClick={handleLogout} />
            </li>
          </>
          : <li
            key='Login'
            className={
              location !== undefined &&
                location?.pathname === '/login/'
                ? 'nav-item active'
                : 'nav-item'
            }
          >
            <GatsbyLink to='/login/' className='nav-link'>
              Login
            </GatsbyLink>
          </li>}
      </ul>
    </div>

  const Notification: React.FC = () => {
    const name =
      (identity.user?.user_metadata?.furName as Maybe<string>)?.split(' ')[0] ?? 'stranger'

    return (
      <span className='navbar-text'>
        {`Hello, ${name}!`}
      </span>
    )
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-0'>
      <div className='container-fluid'>
        <Logo />

        <HamburgerMenu />

        <CollapsibleLinks />

        <Notification />
      </div>
    </nav>
  )
}

export default Navbar