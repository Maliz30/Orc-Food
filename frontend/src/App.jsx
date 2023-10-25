import { useState, useEffect } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  useEffect(() => {

    fetch(`http://localhost:3000/api/items`)
      .then(response => response.json())
      .then(data => console.log(data))

  }, [])

  return (
    <>
    <Header />
    <Outlet />
    <h1>Página Principal</h1>
    </>
  )
}

export default App
