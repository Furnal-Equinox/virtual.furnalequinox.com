import React from 'react'

const TextCard: React.FC = ({ children }) => {
  return (
    <div className='card rounded-card border border-info border-5'>
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}

export default TextCard
