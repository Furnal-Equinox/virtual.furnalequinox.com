import React from 'react'
import './style.scss'

import Anchor from '../../anchor/anchor'

interface GalleryItem {
  title?: string
  artist?: string
  image?: string
  url?: string
}

type Props = GalleryItem

const GalleryItemCard: React.FC<Props> = ({ title, artist, image, url }: Props) => {
  const PlaceholderImage = () =>
    <svg 
      className='bd-placeholder-img card-img rounded-card-img-top' 
      width='100%' 
      height='225' 
      xmlns='http://www.w3.org/2000/svg' 
      preserveAspectRatio='xMidYMid slice' 
      focusable='false' 
      role='img' 
      aria-label='Placeholder: Thumbnail'
    >
      <title>Placeholder</title>
      <rect width='100%' height='100%' fill='#55595c'/>
      <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
        Item Picture
      </text>
    </svg>

  return (
      <div className='card rounded-card mb-5 shadow-sm'>
        {image !== undefined 
          ? 
            <img src={image} className='card-img-top rounded-card-img-top'></img>
          :
            <PlaceholderImage />
        }
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
