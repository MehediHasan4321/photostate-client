import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"

export const useAuth = ()=>{
    return useContext(AuthContext)
}