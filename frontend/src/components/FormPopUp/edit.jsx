import React, { useEffect, useState } from 'react'
import Edit from '../../assets/img/edit.svg'
import api from '../../utils/api'
import { categorias } from '../../categorias'

const PopUpEdit = props => {
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [detalhes, setDetalhes] = useState('')
    const [categoria, setCategoria] = useState('')



    const cat = categorias;
    const handleSubmitCreate = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries())
        const body = {
            nome: formJson.titulo,
            descricao: formJson.detalhes,
            preco: formJson.preco,
            categoria: formJson.categoria
        }

        console.log(body)

        putItem(body)

    }

    useEffect(() => {
        getItem()
    }, [])

    async function getItem() {
        const response = await api.get(`api/items/${props.id}`)
            .then(response => {
                setNome(response.data.nome)
                setCategoria(response.data.categoria)
                setDetalhes(response.data.descricao)
                setPreco(response.data.preco)
            })
    }

    async function putItem(body) {
        const data = await api.put(`api/items/${props.id}`, body)
            .then((response) => {
                return response.data
            })
            .then(window.location.reload())
    }
    return <div>
        <img source={Edit} />
        <h3>Adicionar item</h3>
        <form action="post" onSubmit={handleSubmitCreate}>
            <label htmlFor="titulo">Título</label>
            <input
                type="text" name="titulo" placeholder='Nome do item'
                value={nome}
                onChange={e => { setNome(e.target.value) }}
            />
            <label htmlFor="categoria">Categoria</label>
            <select 
            name="categoria" 
            defaultValue={categoria}
            onChange={e => {setCategoria(e.target.value)}}>
                {cat.map((categoria, index) => (
                    <option key={index} value={categoria}>{categoria}</option>
                ))}
            </select>
            <label htmlFor="preco"></label>
            <input
                type="number"
                name="preco"
                placeholder='R$ XX,XX'
                value={preco}
                onChange={e => { setPreco(e.target.value) }}
            />
            <label htmlFor="detalhes"></label>
            <input
                type="text"
                name="detalhes"
                placeholder='Escreva os detalhes do item'
                value={detalhes}
                onChange={e => { setDetalhes(e.target.value) }}
            />

            <input type="submit" value="Editar" />
        </form>
    </div>
}

export default PopUpEdit