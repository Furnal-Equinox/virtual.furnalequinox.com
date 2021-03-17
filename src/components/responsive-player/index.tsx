import React from 'react'
import ReactVimeoPlayer from 'react-player/vimeo'
import ReactYouTubePlayer from 'react-player/youtube'
import './style.scss'

export interface Props {
  title: string
  url: string
}

export const Vimeo: React.FC<Props> = ({ url, title }: Props) => {
  return (
    <div className='player-wrapper'>
      <ReactVimeoPlayer
        alt={title}
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        controls
        config={{
          playerOptions: {
            autoplay: true
          }
        }}
        previewTabIndex={0}
      />
    </div>
  )
}

export const YouTube: React.FC<Props> = ({ url, title }: Props) => {
  return (
    <div className='player-wrapper'>
      <ReactYouTubePlayer
        alt={title}
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        controls
        previewTabIndex={0}
      />
    </div>
  )
}
