import React from 'react'
import { RouteComponentProps } from '@reach/router'

import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

interface Props extends RouteComponentProps {
  children?: React.ReactNode
}

const ComponentDisplay: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='layout-container'>
      {children}
    </div>
  )
}

export default ComponentDisplay
