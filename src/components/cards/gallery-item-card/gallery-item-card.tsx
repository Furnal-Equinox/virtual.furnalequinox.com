import React from 'react'
import './style.scss'

import ClickableExternalCard from '../clickable-external-card/clickable-external-card'

interface GalleryItem {
  title: string
  artist: string
  image: string
  url: string
}

type Props = GalleryItem

const GalleryItemCard: React.FC<Props> = ({ title, artist, image, url }: Props) => {
  return (
    <ClickableExternalCard url={url}>
      <div className='card rounded-card mb-5 shadow-sm'>
        <img src={image} className='card-img-top rounded-card-img-top'></img>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='card-title h2'>
              <i>{title}</i> by {artist} 
            </p>
            <a 
              href={url} 
              target='_blank' 
              rel='noopener noreferrer' 
              className='btn btn-primary'
            >
              Check them out here!
            </a>
          </div>
        </div>
      </div>
    </ClickableExternalCard>
  )
}

export default GalleryItemCard
