import React from 'react'
import './style.css'

const CategCard = props => {
  return (
    <div className='categoria-card'>
      <div className='cat-card-img'/>
      <span className='categoria-label'>{props.categoria}</span>
    </div>
  )
}

export default CategCard