import {createContext} from 'react'
import useAuth from '../hooks/useAuth'

const Context = createContext()

function UserProvider({children}){
    const { authenticated, loginAdm } = useAuth()

    return <Context.Provider value={{ authenticated,  loginAdm }}>{children}</Context.Provider>
}

export { Context, UserProvider }