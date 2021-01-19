import React from 'react'

export interface Props {
  label?: string
  type?: 'button' | 'submit' | 'reset'
  state?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  hasOutline?: boolean
  isFullwidth?: boolean
  isClose?: boolean
  size?: 'sm' | 'lg'
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({ 
  state = undefined,
  type = undefined, 
  hasOutline = false, 
  size = undefined, 
  isFullwidth = false,
  isClose = false, 
  label = undefined,
  disabled = undefined,
  onClick, 
  ...props 
}: Props) => {
  return (
    <div className={isFullwidth ? 'd-grid' : undefined}>
      <button
        type={type !== undefined ? type : 'button'}
        className={
          !isClose
            ? [
              'btn rounded-pill',
                `btn${hasOutline ? '-outline' : ''}${state !== undefined ? `-${state}` : '-primary'}`,
                `btn${size !== undefined ? `-${size}` : ''}`
            ].join(' ')
            : 'btn-close'
        }
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    </div>
  )
}

export default Button
