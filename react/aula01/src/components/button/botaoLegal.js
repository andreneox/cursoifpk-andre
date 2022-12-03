
import "./button.css"

const BotaoLegal = ({texto, tipo, mensagem}) => {

    const click = () => {
        alert(mensagem)
    }

    return(
        <button className={tipo} onClick={click} >{texto}</button>
    )
}

export default BotaoLegal