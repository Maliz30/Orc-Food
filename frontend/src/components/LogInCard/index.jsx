import React, { useContext, useState } from 'react'
import { Context } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';


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
        <section>
            <span className='Login-title'>Entre aqui</span>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="input-nome">Email</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} name='input-nome' className='input-text-form' />
                </div>
                <div>
                    <label htmlFor='input-senha'>Senha</label>
                    <input type="text" value={senha} onChange={e => setSenha(e.target.value)} name='input-senha' className='input-text-form' />
                </div>
                <div>
                    <input type="submit" value="Entrar"/>
                </div>
            </form>
        </section>
    )
}

export default LoginCard