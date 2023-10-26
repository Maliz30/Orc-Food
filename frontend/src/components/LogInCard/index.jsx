import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginCard = () => {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const logar = () => {}

    return (
        <section>
            <span className='Login-title'>Entre aqui</span>
            <div>
                <div>
                    <label htmlFor="input-nome">Email</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} name='input-nome' className='input-text-form' />
                </div>
                <div>
                    <label htmlFor='input-senha'>Senha</label>
                    <input type="text" value={senha} onChange={e => setSenha(e.target.value)} name='input-senha' className='input-text-form' />
                </div>
            </div>
            <div>
                <Link to="/">Entrar</Link>
            </div>
        </section>
    )
}

export default LoginCard