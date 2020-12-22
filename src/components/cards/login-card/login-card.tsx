import React from 'react'
import './style.scss'

const LoginCard: React.FC = ({ children }) => {
  return (
    <div className='card rounded-card shadow-sm mx-auto my-auto' style={{ width: '20rem' }}>
      <div className='card-body'>
        <div className='d-flex flex-column justify-content-between align-items-center text-center'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default LoginCard
