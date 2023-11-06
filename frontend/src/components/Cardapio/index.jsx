import React, { useContext } from 'react'
import ItemCard from '../ItemCard'

import "./style.css"
import { Context } from '../../context/UserContext'

const Cardapio = props => {
    const { authenticated } = useContext(Context)
    return (
        <section className='cardapio-wrapper'>
            <div className='cardapio-header'>
                <h2 className='cardapio-section-title'>Cardápio: </h2>
                { authenticated ? <button className='add-items-button'>+ Adicionar Item</button>:<p> </p>}
            </div>
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