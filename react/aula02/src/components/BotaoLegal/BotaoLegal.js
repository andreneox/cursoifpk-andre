
import cores from "./BotaoLegal.module.css"


const BotaoLegal = ({texto}) => {
    const handleClick = () => {
        alert ('Botao funcionando')
    }
    return(
        <div>
            <button className={cores.btn} onClick={handleClick}>{texto}</button>
            <br></br><br></br>
            <button className={cores.btnred} onClick={handleClick}>{texto}</button>
        </div>
    )
}


export default BotaoLegal