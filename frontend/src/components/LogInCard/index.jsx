import React, { useContext, useState } from 'react'
import { Context } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';


import './style.css'

const LoginCard = () => {
    const navigate = useNavigate()
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const { loginAdm } = useContext(Context)
    const handleSubmit = (e) => {
        e.preventDefault()
        loginAdm({
            name: nome,
            password: senha
        })
    }

    return (
        <section className='loginCard-box'>
            <span className='loginCard-title'>Entre aqui</span>
            <form onSubmit={handleSubmit} className='loginCard-input-area'>
                <div className='loginCard-input-area-individual'>
                    <label htmlFor="input-nome" className='loginCard-input-label'>Email</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} name='input-nome' className='loginCard-input-text-form' />
                </div>
                <div className='loginCard-input-area-individual'>
                    <label htmlFor='input-senha' className='loginCard-input-label'>Senha</label>
                    <input type="text" value={senha} onChange={e => setSenha(e.target.value)} name='input-senha' className='loginCard-input-text-form' />
                </div>
                <div >
                    <input className='loginCard-button' type="submit" value="Entrar"/>
                </div>
            </form>
        </section>
    )
}

export default LoginCard