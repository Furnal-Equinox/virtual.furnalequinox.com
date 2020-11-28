import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../../content/images/logo.png'

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
            <li
              className={
                location.pathname === '/' ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li
              className={
                location.pathname === '/profile/'
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to='/profile/' className='nav-link'>
                Profile
              </Link>
            </li>
          </ul>
        <div className='navbar-nav flex-row ml-md-auto d-none d-md-flex' />
      </div>
    </nav>
  )
}

export default Navibar
