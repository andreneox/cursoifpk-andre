import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/api";

const FormPessoas = () => {

    const [nome, setNome]= useState()
    const [email, setEmail]= useState()
    const [dataNascimento, setDataNascimento]= useState()

    const navigate = useNavigate()

    const enviar = (event) => {
        event.preventDefault()

        api.post('/api/cadastro',{
            nome: nome,
            email: email,
            data_nascimento:dataNascimento 
        }).then((responser)=>{
            alert ('Pessoa Cadastrada')
            navigate('/pessoas')
        })

    }


    return (
        <div>
            Cadastro de Pessoas

            <form onSubmit={enviar}>
                <div>
                    <label>Nome: </label>
                    <input type="text" onChange={(e)=>setNome(e.target.value)} ></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} ></input>
                </div>
                <div>
                    <label>Data de Nascimento: </label>
                    <input type="date" onChange={(e)=>setDataNascimento(e.target.value)} ></input>
                </div>

                <button>CADASTRAR</button>


            </form>

        </div>


    )
}

export default FormPessoas