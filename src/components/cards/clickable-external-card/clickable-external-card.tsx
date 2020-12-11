import React from 'react'
import './style.scss'

interface Props {
  url: string
}

const ClickableExternalCard: React.FC<Props> = ({ url, children }: Props) => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer' className='clickable-card'>
      {children}
    </a>
  )
}

export default ClickableExternalCard
