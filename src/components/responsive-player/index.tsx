import React from 'react'
import ReactVimeoPlayer from 'react-player/vimeo'
import ReactYouTubePlayer from 'react-player/youtube'
import './style.scss'

export interface Props {
  url: string
}

export const Vimeo: React.FC<Props> = ({ url }: Props) => {
  return (
    <div className='player-wrapper'>
      <ReactVimeoPlayer
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        controls
      />
    </div>
  )
}

export const YouTube: React.FC<Props> = ({ url }: Props) => {
  return (
    <div className='player-wrapper'>
      <ReactYouTubePlayer
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        controls
      />
    </div>
  )
}