import React from 'react'
import { Link } from 'gatsby'

import { PlaceholderImage } from '../../placeholders'
import Img, { FluidObject } from 'gatsby-image'

export interface Dealer {
  title?: string | null | undefined
  description?: string | null | undefined
  banner?: FluidObject
  slug?: string | null | undefined
  isPremium?: boolean | null | undefined
}

type Props = Dealer

const DealerCard: React.FC<Props> = ({ title, description, banner, slug }: Props) => {
  return (
    <div className='card rounded-3 border border-primary border-5 mb-5' tabIndex={0}>
      {banner !== undefined
        ? <Img alt={`Thumbnail banner image for ${title ?? 'this dealer'}`} fluid={banner} className='card-img-top' />
        : <PlaceholderImage />}
      <div className='card-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <p className='card-title text-center h2'>
                {title ?? 'Store Name'}
              </p>
            </div>
            <div className='col-lg-6'>
              <p className='card-text text-center'>
                {description ?? 'Description'}
              </p>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='d-grid'>
              <Link
                title={`Link to the dealer page for ${title ?? 'this dealer'}`}
                to={`.${slug ?? ''}`}
                className='btn btn-primary btn-lg rounded-3'
                tabIndex={0}
              >
                Let's go!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealerCard
