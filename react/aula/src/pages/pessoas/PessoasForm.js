import { useContext, useEffect } from "react"
import BarraSuperior from "../../components/barraSuperior/BarraSuperior"
import VerificaLogin from "../../components/verificarLogin/VerificaLogin"
import {TitleContext} from "../../context/TitleContext"


const PessoasForm = () => {

    const {setTitle} = useContext(TitleContext)
    
    useEffect(()=>{
        setTitle('Cadastro de Pessoas')
    
    }, [setTitle])
    return(
        <VerificaLogin>
            <BarraSuperior/>
            <h1>Cadastro de Pessoas</h1>
        </VerificaLogin>
        
    
        
    )
}
export default PessoasForm