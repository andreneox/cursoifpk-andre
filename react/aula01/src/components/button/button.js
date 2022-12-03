
import "./button.css"
import { useState } from "react"




const Button2 = ({tipo}) => {

    const meuClick = () => {
       setValor(numero + 1)
    }

    const [numero, setValor] = useState(1)

    const [pessoas, setPessoas] =useState (["Maria", "Joao", "Carlos"])

    const addPessoa = () => {

        setPessoas([...pessoas, "Andre"])
    }

    return(
        <div>
            <button className={tipo} onClick={meuClick} > Aumentar + 1 </button>
            <h2>{numero}</h2>
        
        {pessoas.map ((pessoa, index) => (
            <p>{pessoa}</p>
            ))}
 
        </div>
    )
}


export default Button2