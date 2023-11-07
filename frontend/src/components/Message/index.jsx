import React, { useState, useEffect } from 'react'
import './style.css'
import bus from '../../utils/bus'
import { useNavigate } from 'react-router-dom';

const Message = () => {
    const [type, setType] = useState("")
    const [visibility, setVisibility] = useState(false)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        bus.addListener('flash', ({ message, type }) => {
            setVisibility(true)
            setMessage(message)
            setType(type)

            setTimeout(() => {
                setVisibility(false)
                if(type == 'success'){
                    navigate('/')
                }
                window.location.reload()
            }, 2000) 
        })
    }, [])

    return (visibility &&
        <div className={`message ${type}`}>
            <div className='message-wrapper'>
                <div className='progress-container'>
                    <div className='progress'>
                        <div className='progress-bar'>
                        </div>
                    </div>
                </div>
                <span>
                    {message}
                </span>
            </div>
        </div>
    )
}

export default Message