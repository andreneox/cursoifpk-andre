import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../config/api"

const Login = () => {

    const [login, setLogin] = useState()
    const [senha, setSenha] = useState()

    const navigate = useNavigate()

    const enviar = (event) => {
        event.preventDefault()

        api.post('/login',{
            email: login,
            password: senha
        }) .then (({data})=>{
            console.log(data)
            localStorage.setItem('token', data.token)   
            navigate('/pessoas')
        }) .catch ((error)=>{
            console.log('Login ou Senha Incorreto')
        })

    }

    return (
        <div>
            <h2>
                Página de Login
            </h2>
            <form onSubmit={enviar}>

                <div>
                    <label>Usuário: </label>
                    <input type="text" onChange={(e) => setLogin(e.target.value)}></input>
                </div>
                <br></br>
                <div>
                    <label>Senha: </label>
                    <input type="password" onChange={(e) => setSenha(e.target.value)}></input>
                </div>
                <br></br>
                <button>LOGAR</button>

            </form>
        </div>
    )
}

export default Login