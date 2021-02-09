import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

export interface Props {
  label: string
  url: string
  state?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  hasOutline?: boolean
  isFullwidth?: boolean
  size?: 'sm' | 'lg'
  onClick?: () => void
}

const Anchor: React.FC<Props> = ({
  state = undefined,
  hasOutline = false,
  size = undefined,
  isFullwidth = false,
  label,
  url,
  onClick,
  ...props
}: Props) => {
  return (
    <div className={isFullwidth ? 'd-grid' : undefined}>
      <OutboundLink
        title={label}
        href={url}
        className={[
          'btn rounded-pill',
          `btn${hasOutline ? '-outline' : ''}${state !== undefined ? `-${state}` : '-primary'}`,
          `btn${size !== undefined ? `-${size}` : ''}`
        ].join(' ')}
        target='_blank'
        rel='noopener noreferrer'
        onClick={onClick}
        {...props}
      >
        {label}
      </OutboundLink>
    </div>
  )
}

export default Anchor
