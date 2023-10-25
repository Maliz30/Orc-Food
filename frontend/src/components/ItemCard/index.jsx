import React from 'react'
import './style.css'

const ItemCard = props => {
    return (
        <div className='card-wrapper'>
            <div className='categoria-section'>
                <span>{props.item.categoria}</span>
            </div>
            <div className='nomepreco-section'>
                <span className='item-nome'>
                    {props.item.nome}
                </span>
                <span className='item-preco'>
                    R$ {props.item.preco}
                </span>
            </div>
            <div>
                {props.item.descricao}
            </div>
            <div>
                Adicionar ao carrinho
            </div>
        </div>
    )
}

export default ItemCard