import "./Card.css"
import avatar  from "./assets/avatar.png"

const Card = ({titulo, children}) => {
    return(
        <div className="card">
            <div className="conteudo">
                <img src={avatar} className="img" alt="Avatar"/>
                <div className="container">
                    <h4>
                        <b>{titulo}</b>
                    </h4>
                    <p>{children}</p>
                </div>
            </div>
        </div>
            
    )
}
export default Card






