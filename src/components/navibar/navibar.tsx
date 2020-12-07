import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../../content/images/logo.png'

import './style.scss'

import NavbarLinks from '../../data/navbar-links'

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  return (
    <nav className='navbar navbar-expand navbar-light flex-column flex-md-row bg-white sticky-top py-0'>
      <div className='container'>
        <Link className='navbar-brand mr-2' to='/'>
          <img src={Logo} height='64' className='d-inline-block mb-0' alt='Furnal Equinox logo' />
        </Link>
        <ul className='navbar-nav flex-row'>
          {NavbarLinks.map(elem => 
            <li 
              key={elem.id}
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
        <div className='navbar-nav flex-row ml-md-auto d-none d-md-flex' />
      </div>
    </nav>
  )
}

export default Navibar
