import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import '../../utils/fontawesome'

import './style.scss'

interface Props {
  icon: IconProp
  title: string
}

const Icon: React.FC<Props> = ({ icon, title }: Props) => (
  <div className='icon-container' title={title}>
    <FontAwesomeIcon icon={icon} size='2x' className='icon' />
  </div>
)

export default Icon
