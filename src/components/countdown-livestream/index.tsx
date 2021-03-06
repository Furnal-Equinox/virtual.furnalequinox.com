import React from 'react'

import { ResponsiveVimeoPlayer } from '../index'

import Countdown, { zeroPad, CountdownRendererFn } from 'react-countdown'

import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export interface Props {
  title: string
  url: string
  placeholderImage: IGatsbyImageData | undefined
  placeholderImageAlt: string
}

export interface PlaceholderProps {
  placeholderImage: IGatsbyImageData | undefined
  placeholderImageAlt: string
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const LiveStreamPlaceholder: React.FC<PlaceholderProps> = ({
  placeholderImage,
  placeholderImageAlt,
  days,
  hours,
  minutes,
  seconds
}) => {
  return (
    <>
      {placeholderImage !== undefined && <GatsbyImage
        image={placeholderImage}
        className='img-fluid'
        alt={placeholderImageAlt}
      />}
      <div className='text-center'>
        <p className='h1 py-3'>
          {zeroPad(days)} : {zeroPad(hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}
        </p>
        <p className='text-warning'>
          <span className='visually-hidden'>{"Warning: "}</span>
          {"The livestream starts at 12 PM EDT, but we're swapping the placeholder image out here at 11 AM!"}
        </p>
        <p className='text-warning'>
          <span className='visually-hidden'>{"Warning: "}</span>
          {"If you've disabled autoplaying videos, please turn it on for this website!"}
        </p>
        <p className='text-warning'>
          <span className='visually-hidden'>Warning: </span>
          {"The livestream will autoplay when the timer hits zero!"}
        </p>
      </div>
    </>
  )
}

export const LiveStream: React.FC<{ title: string, url: string }> = ({ title, url }) => {
  return (
    <ResponsiveVimeoPlayer
      title={title}
      url={url}
    />
  )
}

const CountdownLiveStream: React.FC<Props> = ({ url, title, placeholderImage, placeholderImageAlt }: Props) => {
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <LiveStream
          title={title}
          url={url}
        />
      )
    } else {
      return (
        <LiveStreamPlaceholder
          placeholderImage={placeholderImage}
          placeholderImageAlt={placeholderImageAlt}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )
    }
  }

  return (
    <Countdown
      date={new Date(Date.UTC(2021, 2, 19, 15, 0, 0))}
      renderer={renderer}
    />
  )
}

export default CountdownLiveStream
