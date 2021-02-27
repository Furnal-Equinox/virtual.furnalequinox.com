import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { PlaceholderSVG } from '../../placeholders'
import Img, { FluidObject } from 'gatsby-image'

export interface ShopItem {
  name?: string
  description?: string
  banner?: FluidObject
  url?: string
}

type Props = ShopItem

const ShopItemCard: React.FC<Props> = ({ name, description, banner, url }: Props) => {
  return (
    <div className='card rounded-3 border border-primary border-5 mb-5'>
      {banner !== undefined
        ? <Img
            title={`${name ?? 'Unnamed product'}, ${description ?? 'has no description.'}`}
            fluid={banner} className='card-img-top' />
        : <PlaceholderSVG />}
      <div className='card-body'>
        <div className='row'>
          <div className='col'>
            <p className='m-0'>
              {name ?? 'Item Name'}
            </p>
          </div>
          <div className='col'>
            <p className='card-text text-center'>
              {description ?? 'Description'}
            </p>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='d-grid'>
            <OutboundLink
              title={`Link to the page where you can buy this item`}
              href={url ?? ''}
              className='btn btn-primary btn-lg rounded-3'
            >
              Learn More
            </OutboundLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopItemCard
