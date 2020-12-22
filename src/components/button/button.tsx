import React from 'react'

export interface Props {
  label: string
  state?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  hasOutline?: boolean
  isFullwidth?: boolean
  size?: 'sm' | 'lg'
  onClick?: () => void
}

const Button: React.FC<Props> = ({ 
  state = undefined, 
  hasOutline = false, 
  size = undefined, 
  isFullwidth = false, 
  label, 
  ...props 
}: Props) => {
  return (
    <div className={isFullwidth ? 'd-grid' : undefined}>
      <button
        type='button'
        className={[
          'btn rounded-pill',
          `btn${hasOutline ? '-outline' : ''}${state !== undefined ? `-${state}` : '-primary'}`,
          `btn${size !== undefined ? `-${size}` : ''}`
        ].join(' ')}
        {...props}
      >
        {label}
      </button>
    </div>
  )
}

export default Button
