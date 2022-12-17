import axios from "axios"
import { useState } from "react"

const Login = () => {

    const [login, setLogin] = useState()
    const [senha, setSenha] = useState()

    const enviar = (event) => {
        event.preventDefault()

        axios.post('http://localhost:3000/login',{
            email: login,
            password: senha
        }) .then (({data})=>{
            console.log(data)
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