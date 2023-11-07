import api from '../utils/api'
import useFlashMessage from './useFlashMessage'

import {useState, useEffect} from 'react'

export default function useAuth(){
    const {setFlashMessage} = useFlashMessage()
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
    }, [])

    async function register(user){
        try {
            const data = await api.post(user)
        } catch (error) {
            
        }
    }

    async function authUser(data){
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
    }

    function logout(){

        setAuthenticated(false);
        api.defaults.headers.Authorization = undefined
    }

    async function loginAdm(adm){
        let msgText = 'Login realizado com sucesso!'
        let msgType = 'success'
        try {
            const data = await api.post('api/adm/login', adm)
            .then((response) => {
                return response.data
            })

            await authUser(data)
            console.log(authenticated)
        } catch (error) {
            msgText = error.response.data.message
            msgType = 'error'
        }

        setFlashMessage(msgText, msgType)
    }

    return { authenticated, register, loginAdm, logout }
}