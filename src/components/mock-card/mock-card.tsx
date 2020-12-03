import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

interface Props {
  path: string
  label: string
  primary: boolean
}

const MockCard: React.FC<Props> = ({ path, label, primary }: Props) => {
  return (
    <div className="card mb-5 shadow-sm">
      <svg 
        className="bd-placeholder-img card-img-top" 
        width="100%" 
        height="225" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMidYMid slice" 
        focusable="false" 
        role="img" 
        aria-label="Placeholder: Thumbnail"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"/>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Dealer Name
        </text>
      </svg>
      <div className="card-body">
        <p className="card-text text-center">
          Come check out my store!
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-outline-primary">View</button>
          <p className='m-0'>
            Artist Name  
          </p>
        </div>
      </div>
    </div>
  )
}

export default MockCard
