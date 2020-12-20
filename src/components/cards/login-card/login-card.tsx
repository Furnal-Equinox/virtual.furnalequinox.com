import React from 'react'
import './style.scss'

interface Props {
  titleOne: string
  subtitleOne: string
  loginButtonText: string
}

const LoginCard: React.FC<Props> = ({ titleOne, subtitleOne, loginButtonText }: Props) => {
  return (
    <div className='card rounded-card shadow-sm mx-auto my-auto' style={{ width: '24rem' }}>
      <div className='card-body'>
        <div className='d-flex flex-column justify-content-between align-items-center text-center'>
          <h1 className='card-title'>
            {titleOne}
          </h1>
          <p className='h2 card-subtitle'>{subtitleOne}</p>
          <button className='btn btn-primary btn-lg rounded-pill'>
            {loginButtonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginCard