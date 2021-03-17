import React from 'react'
import { Link } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import logo from '../../../../content/images/Logo.svg'

import { NavbarLinks } from '../../../data/navbar-links'

export interface Props extends RouteComponentProps {}

const Navbar: React.FC<Props> = ({ location, navigate }: Props) => {
  const identity = useIdentityContext()

  const handleLogout = (): void => {
    identity.logout()
  }

  const Logo: React.FC = () =>
    <Link
      title='Link to the event landing page'
      className='navbar-brand mr-2'
      to='/event/'
      tabIndex={0}
    >
      <img
        src={logo}
        height='64'
        className='d-inline-block mb-0'
        alt='Furnal Equinox logo'
      />
    </Link>

  const HamburgerMenu: React.FC = () =>
    <button
      className='navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#navbarCollapse'
      aria-controls='navbarCollapse'
      aria-expanded='false'
      aria-label='Toggle navigation'
      title='Toggle navigation and expand navigation bar'
    >
      <span className='navbar-toggler-icon' />
    </button>

  const CollapsibleLinks: React.FC = () =>
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
            aria-current={
              location !== undefined &&
              location?.pathname === elem.to
                ? 'page'
                : false
            }
          >
            <Link
              title={elem.desc}
              to={elem.to}
              className='nav-link'
              tabIndex={0}
            >
              {elem.name}
            </Link>
          </li>
        )}
      </ul>
      {identity.user !== undefined &&
        <Link
          title='Logout and return to the login page'
          to='/'
          className='btn btn-primary btn-sm rounded-3'
          onClick={handleLogout}
          tabIndex={0}
        >
          Logout
        </Link>}
    </div>

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-0'>
      <div className='container-fluid'>
        <Logo />

        <HamburgerMenu />

        <CollapsibleLinks />
      </div>
    </nav>
  )
}

export default Navbar
