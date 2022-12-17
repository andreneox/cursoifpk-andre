import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <div>
            
            <div>MENU</div>

            <Link to="/sobre">Sobre</Link><br></br>
            <Link to="/pessoas">Lista de Pessoas</Link><br></br>
            <Link to="/pessoas/store">Cadastrar Pessoas</Link><br></br>
            <Link to="/pessoa/2">Pessoa</Link><br></br>

        </div>
    )
}

export default Navbar   