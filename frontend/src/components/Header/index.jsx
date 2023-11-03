import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Logo from '../../assets/img/logo.png'

const Header = () => {
  return (
    <div className='header-box'>
        <div>
          <img src={Logo} alt="Logo do Orc'Food" className='header-logo'/>
        </div>
        <Link to="/login" className='login-button'>Login</Link>
    </div>
  )
}

export default Header