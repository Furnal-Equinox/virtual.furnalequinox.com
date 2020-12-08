import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

interface Props {
  author: string
  title: string
}

const Footer: React.FC<Props> = ({ author, title }: Props) => (
  <div className='footer'>
    <div className='container text-center py-2'>
      <div className='col'>
        <p className='m-0'>
          <strong>{ title }</strong>
        </p>
      </div>
    </div>
  </div>
)

export default Footer
