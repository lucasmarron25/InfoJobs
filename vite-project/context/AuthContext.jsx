import { createContext, useState, useContext } from "react";

export const AuthContext = createContext()

export function AuthProvider({children}){
        const [isLoggedIn, setLoggedIn] = useState(false)

    const login = () => {
        setLoggedIn(true)
    }
     const logout = () => {
        setLoggedIn(false)
    }

    const value = {
        isLoggedIn,
        login,
        logout
    }

    return <AuthContext value={value}> {children}</AuthContext>
}

export function useAuth(){
    const context = useContext(AuthContext)
    if(context === undefined){
        throw new Error('s')
    }
    return context
}