import React from 'react'
import ItemCard from '../ItemCard'

import "./style.css"

const Cardapio = props => {
    return (
        <section className='cardapio-wrapper'>
            <h2 className='cardapio-section-title'>Cardápio: </h2>
            <div className='items-wrapper'>
                {
                    props.item.map(item =>   
                        <ItemCard key={item._id} item={item} />
                    )
                }
            </div>
        </section>
    )
}

export default Cardapio