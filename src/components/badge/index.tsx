import React from 'react'

interface Props {
  label?: string
  primary?: boolean
}

const Badges: React.FC<Props> = ({ label, primary }: Props) => {
  return (
    <span className={`badge ${primary !== undefined ? `badge-${primary ? 'primary' : 'secondary'}` : ''}`}>
      {label ?? 'no label'}
    </span>
  )
}

export default Badges
