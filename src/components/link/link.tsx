import React from 'react'
import GatsbyLink from 'gatsby-link'

export interface Props {
  label: string
  to: string
  state?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  hasOutline?: boolean
  isFullwidth?: boolean
  size?: 'sm' | 'lg'
}

const Link: React.FC<Props> = ({ 
  state = undefined, 
  hasOutline = false, 
  size = undefined, 
  isFullwidth = false, 
  label, 
  to, 
  ...props 
}: Props) => {
  return (
    <div className={isFullwidth ? 'd-grid' : undefined}>
      <GatsbyLink
        to={to}
        className={[
          'btn rounded-pill',
          `btn${hasOutline ? '-outline' : ''}${state !== undefined ? `-${state}` : '-primary'}`,
          `btn${size !== undefined ? `-${size}` : ''}`
        ].join(' ')}
        {...props}
      >
        {label}
      </GatsbyLink>
    </div>
  )
}

export default Link 
