import React from 'react'
import './style.css'

const PopUp = props => {
  return (props.trigger) ? (
    <div className='popup-wrapper'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default PopUp