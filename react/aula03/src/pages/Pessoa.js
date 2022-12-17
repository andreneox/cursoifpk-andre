import { useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../config/api"

const Pessoa = () => {

    const {id} = useParams()

    useEffect (()=>{
        api.get('api/show/'+id).then(({data})=>{
            console.log(data)
        })
    }, [])

    return(
        <div>
            Pessoa
        </div>

    )
}

export default Pessoa