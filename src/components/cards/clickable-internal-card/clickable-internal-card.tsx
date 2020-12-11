import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

interface Props {
  slug: string
}

const ClickableInternalCard: React.FC<Props> = ({ slug, children }: Props) => {
  return (
    <Link to={slug} className='clickable-card'>
      {children}
    </Link>
  )
}

export default ClickableInternalCard
