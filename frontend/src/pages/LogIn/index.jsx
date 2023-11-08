import LoginCard from '../../components/LogInCard'
import Logo from '../../assets/img/logo.png'
import Burger from '../../assets/img/burger.png'
import "./style.css"

const LogIn = () => {
  return (
    <div className='login-box'>
      <div className='login-image-box'>
        <img src={Logo} alt="Logo do Orc'Food" className='login-logo'/>
        <img src={Burger} alt="Desenho de um Hamburger" className='login-burger' />
      </div>
      <LoginCard />
    </div>
  )
}

export default LogIn