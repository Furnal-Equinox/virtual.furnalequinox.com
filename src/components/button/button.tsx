import React from 'react'

export interface Props {
  label: string
  state?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  hasOutline: boolean
  size?: 'sm' | 'lg'
}

const Button: React.FC<Props> = ({ state = undefined, hasOutline = false, size = undefined, label, ...props }: Props) => {
  return (
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
  )
}

export default Button
