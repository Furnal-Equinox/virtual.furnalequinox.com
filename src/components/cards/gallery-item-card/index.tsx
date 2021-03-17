import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { PlaceholderSVG } from '../../placeholders'
import Img, { FluidObject } from 'gatsby-image'
import { isStrEmpty } from '../../../utils/tools'

export interface GalleryItem {
  title?: string
  artist?: string
  image?: FluidObject
  url?: string
  desc?: string
}

type Props = GalleryItem

const GalleryItemCard: React.FC<Props> = ({ title, artist, image, url, desc }: Props) => {
  return (
    <div className='card rounded-3 border-primary border-5 m-2' tabIndex={0}>
      {image !== undefined
        ? <Img
            alt={
              `${
                isStrEmpty(title) ? 'Untitled' : title as string
              } by ${
                isStrEmpty(artist) ? 'unknown artist' : artist as string
              }. ${
                isStrEmpty(desc) ? 'An art piece' : desc as string
              }`
          }
            fluid={image}
            className='card-img-top'
        />
        : <PlaceholderSVG />}
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='card-title text-center h5'>
            {!isStrEmpty(title) ? <><i>{title ?? 'Title'}</i><br /></> : <></>}
            {`by ${artist ?? 'Artist'}`}
          </p>
          {url !== undefined &&
            <OutboundLink
              title={'Link to the artist\'s page for this art piece. This link will open in a new tab.'}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary btn-lg rounded-3'
              tabIndex={0}
            >
              Learn More
            </OutboundLink>}
        </div>
      </div>
    </div>
  )
}

export default GalleryItemCard
