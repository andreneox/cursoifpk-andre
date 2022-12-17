import axios from "axios"
import { useEffect} from "react"
import { useState } from "react"
import api from "../../config/api"
import { Link } from "react-router-dom"


const Pessoas = () => {

    const [pessoas, setPessoas] = useState([])
    
    useEffect(()=> {
        api.get('/api/').then(({data})=>{
            console.log(data.data)
            setPessoas(data.data)
        }).catch((error)=>{
            alert('erro !!')
        })
    },[setPessoas])
    




    return(
        <div>
            <h2>
                Lista de Pessoas
            </h2>

            {pessoas.map ((pessoa, index)=>(
                <div key={index}>
                    ID: {pessoa.id}
                    Nome: {pessoa.nome}
                    <Link to={'/pessoa/'+pessoa.id}>- Pessoa</Link>
                </div>
            ))}

        </div>
    )
}

export default Pessoas