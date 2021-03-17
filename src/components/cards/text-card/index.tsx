import React from 'react'

const TextCard: React.FC = ({ children }) => {
  return (
    <div className='card rounded-3 border border-primary border-5 h-100' tabIndex={0}>
      <div className='card-body'>
        <div className='container text-center p-1'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextCard
