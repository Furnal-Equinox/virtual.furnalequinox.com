import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../../content/images/logo.png'

import './style.scss'

import { NavbarLinks } from '../../data/navbar-links'

export interface Props {
  location: Location
}

const Navibar: React.FC<Props> = ({ location }: Props) => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-white sticky-top py-0'>
      <div className='container'>
        <Link className='navbar-brand mr-2' to='/'>
          <img src={Logo} height='64' className='d-inline-block mb-0' alt='Furnal Equinox logo' />
        </Link>

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
                  location.pathname === elem.to 
                    ? 'nav-item active' 
                    : 'nav-item'
                }
              >
                <Link to={elem.to} className='nav-link'>
                  {elem.name}
                </Link>
              </li> 
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navibar
