import React from 'react'
import './style.scss'

import Anchor from '../../anchor'

export interface ShopItem {
  name?: string
  price?: string
  description?: string
  banner?: string
  url?: string
}

type Props = ShopItem

const ShopItemCard: React.FC<Props> = ({ name, price, description, banner, url }: Props) => {
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
      {banner !== undefined 
        ? <img src={banner} className='card-img-top rounded-card-img-top'></img>
        : <PlaceholderImage />
      }
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
