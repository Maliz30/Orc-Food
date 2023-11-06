import React, { useContext, useState } from 'react'
import ItemCard from '../ItemCard'
import PopUp from '../PopUp'    

import "./style.css"
import { Context } from '../../context/UserContext'
import FormPopUp from '../FormPopUp'

const Cardapio = props => {
    const [showCreate, setShowCreate] = useState(false)
    const { authenticated } = useContext(Context)
    return (
        <section className='cardapio-wrapper'>
            <div className='cardapio-header'>
                <h2 className='cardapio-section-title'>Cardápio: </h2>
                { authenticated ? <button className='add-items-button' onClick={() => setShowCreate(true)}>+ Adicionar Item</button>:<p> </p>}
            </div>
            <div className='items-wrapper'>
                {
                    props.item.map(item =>
                        <ItemCard key={item._id} item={item} />
                    )
                }
            </div>

            {/* PopUps dos itens */}
            <PopUp trigger={showCreate} setTrigger={setShowCreate}>
                <FormPopUp type={'create'} />
            </PopUp>
        </section>
    )
}

export default Cardapio