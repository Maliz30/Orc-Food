
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './style.css'

function App() {

  

  return (
    <>
    <Header />
    <section className='section-format'>
      <Outlet />
    </section>
    </>
  )
}

export default App
