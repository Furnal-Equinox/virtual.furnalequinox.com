import React from 'react'
import './style.scss'

interface Props {
  copyright: string
}

const Footer: React.FC<Props> = ({ copyright }: Props) => (
  <div className='footer'>
    <div className='container text-center py-2'>
      <div className='col'>
        <p className='m-0'>
          <strong>{ copyright }</strong>
        </p>
      </div>
    </div>
  </div>
)

export default Footer
