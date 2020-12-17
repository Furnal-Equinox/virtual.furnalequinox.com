import React from 'react'
import './style.scss'

import ClickableExternalCard from '../clickable-external-card/clickable-external-card'

interface Props {
  title: string
  description: string
  banner: string
  url: string
}

const SocialCard: React.FC<Props> = ({ title, description, banner, url }: Props) => {
  return (
    <ClickableExternalCard url={url}>
      <div className='card rounded-card mb-5 shadow-sm'>
        <img src={banner} className='card-img-top rounded-card-img-top'></img>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='m-0'>
              {title}  
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

export default SocialCard
