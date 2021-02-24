import React from 'react'

import Anchor from '../../anchor'
import { PlaceholderSVG } from '../../placeholders'

export interface ShopItem {
  name?: string
  price?: string
  description?: string
  banner?: string
  url?: string
}

type Props = ShopItem

const ShopItemCard: React.FC<Props> = ({ name, price, description, banner, url }: Props) => {
  return (
    <div className='card rounded-3 border border-primary border-5 mb-5'>
      {banner !== undefined
        ? <img src={banner} className='card-img-top' />
        : <PlaceholderSVG />}
      <div className='card-body'>
        <div className='row'>
          <div className='col'>
            <p className='m-0'>
              {`${name ?? 'Item Name'} for ${price ?? 'Price'}`}
            </p>
          </div>
          <div className='col'>
            <p className='card-text text-center'>
              {description ?? 'Description'}
            </p>
          </div>
        </div>
        <div className='row mt-3'>
          <Anchor label='Redbubble Store' url={url ?? ''} isFullwidth />
        </div>
      </div>
    </div>
  )
}

export default ShopItemCard
