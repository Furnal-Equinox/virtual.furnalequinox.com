import React from 'react'
import './style.scss'

import ClickableExternalCard from '../clickable-external-card/clickable-external-card'

interface ShopItem {
  name: string
  price: string
  description: string
  banner: string
  url: string
}

type Props = ShopItem

const ShopItemCard: React.FC<Props> = ({ name, price, description, banner, url }: Props) => {
  return (
    <ClickableExternalCard url={url}>
      <div className='card mb-5 shadow-sm'>
        <img src={banner} className='card-img-top'></img>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='m-0'>
              {`${name} for ${price}`}  
            </p>
            <p className='card-text text-center'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </ClickableExternalCard>
  )
}

export default ShopItemCard
