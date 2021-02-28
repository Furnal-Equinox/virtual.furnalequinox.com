import React from 'react'
import { Link } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import logo from '../../../../content/images/Logo.svg'

export interface Props extends RouteComponentProps {
  identityContext?: any
}

const Navbar: React.FC<Props> = ({ location }: Props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-0'>
      <div className='container-fluid justify-content-center'>
        <Link to='/'>
          <img src={logo} height='64' className='d-inline-block mb-0' alt='Furnal Equinox logo' />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
