import {createContext} from 'react'
import useAuth from '../hooks/useAuth'

const Context = createContext()

function UserProvider({children}){
    const { authenticated, loginAdm, logout } = useAuth()

    return <Context.Provider value={{ authenticated,  loginAdm, logout }}>{children}</Context.Provider>
}

export { Context, UserProvider }