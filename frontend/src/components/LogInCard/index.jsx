import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const LoginCard = () => {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const logar = () => {}

    return (
        <section className='loginCard-box'>
            <span className='loginCard-title'>Entre aqui</span>
            <div className='loginCard-input-area'>
                <div className='loginCard-input-area-individual'>
                    <label htmlFor="input-nome" className='loginCard-input-label'>Email</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} name='input-nome' className='loginCard-input-text-form' />
                </div>
                <div className='loginCard-input-area-individual'>
                    <label htmlFor='input-senha' className='loginCard-input-label'>Senha</label>
                    <input type="text" value={senha} onChange={e => setSenha(e.target.value)} name='input-senha' className='loginCard-input-text-form' />
                </div>
            </div>
            <div >
                <Link className='loginCard-button' to="/">Entrar</Link>
            </div>
        </section>
    )
}

export default LoginCard