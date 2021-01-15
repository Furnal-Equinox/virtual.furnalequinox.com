import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Link } from 'gatsby'
import Logo from '../../../content/images/logo.png'

import './style.scss'

import { NavbarLinks, NavbarAccountLinks } from '../../data/navbar-links'

export interface Props extends RouteComponentProps {
  identityContext?: any
}

const Navibar: React.FC<Props> = ({ location, identityContext }: Props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white sticky-top py-0'>
      <div className='container'>
        <Link className='navbar-brand mr-2' to='/'>
          <img src={Logo} height='64' className='d-inline-block mb-0' alt='Furnal Equinox logo' />
        </Link>

        <span className='navbar-text'>
          {identityContext !== undefined && identityContext.provisionalUser
            ? 'Check your email!'
            : `Hello, ${identityContext.user?.user_metadata?.full_name?.split(' ')[0] ?? 'user'}!`
          }
        </span>

        <button 
          className='navbar-toggler' 
          type='button' 
          data-bs-toggle='collapse' 
          data-bs-target='#navbarCollapse' 
          aria-controls='navbarCollapse' 
          aria-expanded='false' 
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

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
                <Link to={elem.to} className='nav-link'>
                  {elem.name}
                </Link>
              </li> 
            )}
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                Account
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                {NavbarAccountLinks.map(elem => 
                  <li 
                    key={elem.name}
                  >
                    <Link 
                      to={elem.to} 
                      className={
                        location !== undefined &&
                      location?.pathname === elem.to 
                          ? 'dropdown-item active' 
                          : 'dropdown-item'
                      }>
                      {elem.name}
                    </Link>
                  </li> 
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navibar
