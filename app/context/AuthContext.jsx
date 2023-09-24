import { useContext , createContext , useState } from 'react'

const AuthContext = createContext({})

const useAuthContext = ()=>{
    return useContext(AuthContext)
}

const AuthProvider =({children})=>{
    const [authenticated , setAuthenticated] = useState(localStorage.getItem)
}