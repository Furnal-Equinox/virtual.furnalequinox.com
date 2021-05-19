import React from 'react'

import { PlaceholderSVG } from '../../placeholders'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export interface ShopItem {
  name?: string
  description?: string
  banner?: IGatsbyImageData
  url?: string
}

type Props = ShopItem

const ShopItemCard: React.FC<Props> = ({ name, description, banner, url }: Props) => {
  return (
    <div className='card rounded-3 border border-primary border-5 mb-5' tabIndex={0}>
      {banner !== undefined
        ? <GatsbyImage
            alt={`${name ?? 'Unnamed product'}, ${description ?? 'has no description.'}`}
            image={banner} className='card-img-top'
        />
        : <PlaceholderSVG />}
      <div className='card-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p className='card-title text-center h5'>
                {name ?? 'Item Name'}
              </p>
            </div>
            <div className='col-12'>
              <p className='card-text text-center'>
                {description ?? 'Description'}
              </p>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='d-grid'>
              <a
                title='Link to the page where you can buy this item. This link will open in a new tab.'
                href={url ?? ''}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary btn-lg rounded-3'
                tabIndex={0}
              >
                {"Learn More"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopItemCard
