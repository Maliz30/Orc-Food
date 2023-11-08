import React, { useContext, useState } from 'react'
import './style.css'
import { Context } from '../../context/UserContext'
import Delete from '../../assets/img/delete.svg'
import Edit from '../../assets/img/edit.svg'
import PopUp from '../PopUp'
import PopUpDelete from '../FormPopUp/delete'
import PopUpEdit from '../FormPopUp/edit'


const ItemCard = props => {
    const [showDelete, setShowDelete] = useState(false)
    const [showEdit, setShowEdit] = useState(false)

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
                    <button className='adm-button' onClick={() => {setShowDelete(true)}}><img src={Delete} alt="" /></button>
                    <button className='adm-button'  onClick={() => {setShowEdit(true)}}><img src={Edit} alt="" /></button>
                </div> : <p></p>}
            </div>

            {/* PopUps dos itens */}
            <PopUp trigger={showDelete} setTrigger={setShowDelete}>
                <PopUpDelete id={props.id}/>
            </PopUp>

            <PopUp trigger={showEdit} setTrigger={setShowEdit}>
                <PopUpEdit id={props.id}/>
            </PopUp>



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