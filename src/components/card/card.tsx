import React from 'react'
import { Link } from 'gatsby'
import './style.scss'
import { ImageSharpFluid } from '../../../types/graphql-types'


interface Props {
  title: string
  dealer: string
  description: string
  banner: string
  slug: string
}

const Card: React.FC<Props> = ({ title, dealer, description, banner, slug }: Props) => {
  return (
    <div className="card mb-5 shadow-sm">
      <img src={banner} className='card-img-top'></img>
      <div className="card-body">
        <p className="card-text text-center">
          {description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`.${slug}`} className="btn btn-outline-primary">View</Link>
          <p className='m-0'>
            {dealer}  
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
