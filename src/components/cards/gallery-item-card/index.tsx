import React from 'react'

import Anchor from '../../anchor'
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
          <Anchor label='Check them out here!' url={url ?? ''} />
        </div>
      </div>
    </div>
  )
}

export default GalleryItemCard
