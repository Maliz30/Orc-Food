import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <div className='header-box'>
        <div>Nome</div>
        <Link to="/login" className='login-button'>Login</Link>
    </div>
  )
}

export default Header