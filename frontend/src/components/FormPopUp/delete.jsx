import React, { useEffect, useState } from 'react'
import Delete from '../../assets/img/delete.svg'
import api from '../../utils/api'
import { categorias } from '../../categorias'

const PopUpDelete = props => {
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [detalhes, setDetalhes] = useState('')
    const [categoria, setCategoria] = useState('')



    const cat = categorias;
    const handleConfirmDelete = () => {
        deleteItem(props.id)

    }

    async function deleteItem(id) {
        const data = await api.delete(`api/items/${id}`)
            .then((response) => {
                return response.data
            })
            .then(window.location.reload())
    }
    return <div>
        <img source={Delete} />
        <h3>Deletar item</h3>
        <span>Tem certeza que deseja excluir esse item permanentemente?</span>
        <button onClick={handleConfirmDelete}>Deletar</button>
    </div>
}

export default PopUpDelete