
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Carrinho from './components/Carrinho'

function App() {

  

  return (
    <>
    {/* <Carrinho/> */}
    <Header />
    <Outlet />
    </>
  )
}

export default App
