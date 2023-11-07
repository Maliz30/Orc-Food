import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Logo from '../../assets/img/logo.png'
import { Context } from '../../context/UserContext'

const Header = () => {
  const {authenticated, logout} = useContext(Context)
  return (
    <div className='header-box'>
        <div>
          <img src={Logo} alt="Logo do Orc'Food" className='header-logo'/>
        </div>
        {!authenticated ?
          <Link to="/login" className='header-button login'>Login</Link> :
          <button onClick={logout} className='header-button logout'>Logout</button>
        }
        
    </div>
  )
}

export default Header