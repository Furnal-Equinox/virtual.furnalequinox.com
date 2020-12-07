import { Link } from 'gatsby'
import React from 'react'
import './style.scss'

interface Props {
  author: string
  title: string
}

const Footer: React.FC<Props> = ({ author, title }: Props) => (
  <div className='footer'>
    <div className='container text-center'>
      <hr className='border-primary' />
      <p>
        <strong>{ title }</strong>
      </p>
    </div>
  </div>
)

export default Footer
