import React from 'react'
import './style.css'

const ItemCard = props => {
    return (
        <div className='card-wrapper'>
            <div className='nomedescricao-section'>
                <span className='item-nome'>
                    {props.item.nome}
                </span>
                <div className='text-section'>
                    <span>{props.item.categoria}</span>
                </div>
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