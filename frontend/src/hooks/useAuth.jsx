import api from '../utils/api'

import {useState, useEffect} from 'react'

export default function useAuth(){
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

    async function loginAdm(adm){
        try {
            const data = await api.post('api/adm/login', adm)
            .then((response) => {
                return response.data
            })

            await authUser(data)
            console.log(authenticated)
        } catch (error) {
            console.log(error)
        }
    }

    return { authenticated, register, loginAdm }
}