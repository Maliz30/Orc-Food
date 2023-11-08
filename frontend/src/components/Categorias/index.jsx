import React from 'react'
import CategCard from '../CategCard'
import './style.css'
import { categorias } from '../../categorias'

const Categorias = () => {
  return (
    <section className='categorias-section'>
      <h2 className='categorias-section-title'>Categorias</h2>
      <div className='categorias-cards-wrapper'>
        {categorias.map(nome => <CategCard categoria={nome} key={nome}/>)}
      </div>
    </section>
  )
}

export default Categorias