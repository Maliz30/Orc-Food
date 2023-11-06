import React, { useContext } from 'react'
import './style.css'
import { Context } from '../../context/UserContext'
import Delete from '../../assets/img/delete.svg'
import Edit from '../../assets/img/edit.svg'

const ItemCard = props => {
    const { authenticated } = useContext(Context)

    return (
        <div className='card-wrapper'>
            <div className='item-card-header'>
                <div className='nomedescricao-section'>
                    <span className='item-nome'>
                        {props.item.nome}
                    </span>
                    <div className='text-section'>
                        <span>{props.item.categoria}</span>
                    </div>
                </div>
                {authenticated ? <div className='buttons-wrapper'>
                    <button className='adm-button'><img src={Delete} alt="" /></button>
                    <button className='adm-button'><img src={Edit} alt="" /></button>
                </div> : <p></p>}
            </div>

            <div className='text-section desc-item'>
                {props.item.descricao}
            </div>
            <div className='action-card'>
                <span className='item-preco'>
                    R$ {props.item.preco}
                </span>
                <div className='add-cart-button'>
                    Adicionar ao carrinho
                </div>
            </div>

        </div>
    )
}

export default ItemCard