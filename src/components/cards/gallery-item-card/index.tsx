import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { PlaceholderSVG } from '../../placeholders'

export interface GalleryItem {
  title?: string
  artist?: string
  image?: string
  url?: string
}

type Props = GalleryItem

const GalleryItemCard: React.FC<Props> = ({ title, artist, image, url }: Props) => {

  return (
    <div className='card rounded-3 border-primary border-5 mb-5'>
      {image !== undefined
        ? <img src={image} className='card-img-top' />
        : <PlaceholderSVG />}
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='card-title text-center h2'>
            <i>{title ?? 'Title'}</i> by {artist ?? 'Artist'}
          </p>
          {url !== undefined && 
            <OutboundLink
              title={`Link to the artist's page for this art piece`}
              href={url}
              className='btn btn-primary btn-lg rounded-3'
            >
              Learn More
            </OutboundLink>
          }
        </div>
      </div>
    </div>
  )
}

export default GalleryItemCard
