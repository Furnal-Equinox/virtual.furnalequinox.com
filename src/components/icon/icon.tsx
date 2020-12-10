import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

interface Props {
  name: string
  title: string
}

const Icon: React.FC<Props> = ({ name, title }: Props) => (
  <div className='icon' title={title}>
    <FontAwesomeIcon icon={name as IconName} />
  </div>
)

export default Icon
