import React from 'react'

export interface Props {
  label: string
  url: string
  state?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  hasOutline?: boolean
  size?: 'sm' | 'lg'
}

const Anchor: React.FC<Props> = ({ state = undefined, hasOutline = false, size = undefined, label, url, ...props }: Props) => {
  return (
    <a
      href={url}
      className={[
        'btn rounded-pill',
        `btn${hasOutline ? '-outline' : ''}${state !== undefined ? `-${state}` : '-primary'}`,
        `btn${size !== undefined ? `-${size}` : ''}`
      ].join(' ')}
      target='_blank' 
      rel='noopener noreferrer'
      {...props}
    >
      {label}
    </a>
  )
}

export default Anchor
