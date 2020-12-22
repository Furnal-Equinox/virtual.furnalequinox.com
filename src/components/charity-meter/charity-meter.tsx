import React from 'react'
import './style.scss'

interface Props {

}

const CharityMeter: React.FC<Props> = ({}: Props) => {
  return (
    <div className='progress progress-larger'>
      <div 
        className='progress-bar progress-bar-striped progress-bar-animated' 
        role='progressbar' 
        aria-valuenow={50} 
        aria-valuemin={0} 
        aria-valuemax={100}
        style={{ width: '50%' }}
      />
    </div>

  )
}

export default CharityMeter
