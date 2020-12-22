import React from 'react'

export interface Props {
  label: string
  url: string
  state?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  hasOutline?: boolean
  isFullwidth?: boolean
  size?: 'sm' | 'lg'
}

const Anchor: React.FC<Props> = ({ 
  state = undefined, 
  hasOutline = false, 
  size = undefined, 
  isFullwidth = false, 
  label, 
  url, 
  ...props 
}: Props) => {
  return (
    <div className={isFullwidth ? 'd-grid' : undefined}>
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
    </div>
  )
}

export default Anchor
