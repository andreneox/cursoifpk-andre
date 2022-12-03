import "./button.css"
import { useState } from "react"




const Button = ({tipo}) => {

    const meuClick = () => {
       setValor(numero - 1)
    }

    const [numero, setValor] = useState(100)


    return(
        <div>
            <button className={tipo} onClick={meuClick} > Diminuir - 1 </button>
            <h2>{numero}</h2>
        </div>
        
    )
}


export default Button