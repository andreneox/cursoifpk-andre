import "./button.css"
import { useState } from "react"




const ButtonJogo = ({tipo}) => {

    const [argentina, setArgentina] =useState (0)
    const [australia, setAustralia] = useState (0)


    const golArgentina = () => {
        setArgentina (argentina+1)
    }

    const golAustralia = () => {
        setAustralia (australia+1)
    }

    

    return(
        <div>
            <button className={tipo} onClick={golArgentina} > Argentina</button>
                      
            <button className={tipo} onClick={golAustralia} > Australia</button>

            <h2>Argentina {argentina} X {australia} Australia</h2>

        </div>
        
    )
}


export default ButtonJogo