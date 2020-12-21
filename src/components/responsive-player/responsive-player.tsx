import React from 'react'
import ReactPlayer from 'react-player'
import './style.scss'

export interface Props {
  url: string
}

const ResponsivePlayer: React.FC<Props> = ({ url }: Props) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        width='100%'
        height='100%'
      />
    </div>
  )
}

export default ResponsivePlayer