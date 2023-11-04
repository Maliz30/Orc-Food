import React from 'react'
import './style.css'

const Categorias = props => {
  const categ = []
  props.items.forEach(item => {
    if(!categ.includes(item.categoria)){
      categ.push(item.categoria);
    }
  });

  return (
    <section>
      <h2 className='categorias-section-title'>Categorias</h2>
    </section>
  )
}

export default Categorias