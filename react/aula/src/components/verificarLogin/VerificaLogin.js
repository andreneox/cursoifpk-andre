
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const VerificaLogin = ({children}) =>{

    const [logado] = useState(localStorage.getItem('logado'))
    const navigate = useNavigate()

    useEffect(()=>{
        if(!logado){
            navigate ('/login')
        }
    },[logado, navigate])

   return (
    <>
        {children}
    </>
   )
}
export default VerificaLogin