import React from 'react'
import Create from '../../assets/img/create.svg'
import Delete from '../../assets/img/delete.svg'
import Edit from '../../assets/img/edit.svg'
import api from '../../utils/api'
import { categorias } from '../../categorias'

const FormPopUp = props => {
    const cat = categorias;
    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData)
    }
    return (props.type == 'edit' ?
        <div>
            <img source={Edit} />
            <h3>Editar item</h3>
            <form action="put" onSubmit={handleSubmit}></form>
        </div>
        : props.type == 'create' ?
            <div>
                <img source={Create} />
                <h3>Adicionar item</h3>
                <form action="post">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" name="titulo" placeholder='Nome do item' />
                    <label htmlFor="categoria">Categoria</label>
                    <select name="categoria" defaultValue= "default">
                        <option value="default" disabled>Selecione uma categoria</option>
                        {cat.map((categoria, index) => (
                            <option key={index} value={categoria}>{categoria}</option>
                        ))}
                    </select>
                    <label htmlFor="preco"></label>
                    <input type="number" name="preco" placeholder='R$ XX,XX' />
                    <label htmlFor="detalhes"></label>
                    <input type="text" name="detalhes" placeholder='Escreva os detalhes do item' />
                </form>
            </div>
            :
            <div>
                <img source={Delete} />
            </div>
    )
}

export default FormPopUp