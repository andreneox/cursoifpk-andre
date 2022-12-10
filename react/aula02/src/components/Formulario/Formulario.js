import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import { UserContext } from "../../context/UserContext";

const Formulario = ({botao}) => {

    useEffect(()=>{

        setUser('sdasdasd')

    },[setUser])

    const [user, setUser] = useContext(UserContext)
    
    const [pessoa, setPessoa] = useState({
        nome:'',
        telefone: '',
        cep: ''
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .get('https://viacep.com.br/ws/'+pessoa.cep+'/json/')
            .then(function(response){
                alert(response.data.bairro)
            })
            .catch(function error (){
                console.log(error)
            })

            setUser("ASDASDASDAS")
        
    }

   
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Nome: </label>
                <input type="text" onChange={(e) => setPessoa({...pessoa,nome:e.target.value})}/> <br></br><br></br>
                <label>Telefone: </label>
                <input type="text" onChange={(e) => setPessoa({...pessoa,telefone:e.target.value})}/><br></br><br></br>
                <label>CEP: </label>
                <input type="text" onChange={(e) => setPessoa({...pessoa,cep:e.target.value})}/><br></br><br></br>
                <button>ENVIAR</button>
                
            </form>
            <br></br>
            {pessoa.nome} -- {pessoa.telefone} -- {pessoa.cep}
            {botao}
        </>
    )
}

export default Formulario

