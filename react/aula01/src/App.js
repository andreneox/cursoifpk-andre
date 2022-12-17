// import logo from './logo.svg';
import './App.css';

import PrimeiroComponente from "./components/PrimeiroComponente";
import ams from "./assets/ams.jpg";
import Button from "./components/button/button";
import Button2 from "./components/button/button2";
import ButtonJogo from "./components/button/buttonjogo";
import ButtonLogin from "./components/button/button login";
import BotaoLegal from "./components/button/botaoLegal";


function App() {

  const pessoa = "Lou"
  

  const nav = 
  (
    <nav>

      <ul>
        <li><a href='#' >Inicio</a></li>
        <li><a href='#'>Sobre</a></li>
        <li><a href='#'>Cadastro</a></li>
        <li><a href='#'>Contato</a></li>
      
      </ul>
      
    </nav>

  )

  return (

    <div className="App">
       {nav}
        Meu nome é {pessoa}, minha idade é {2022-1998} anos. <br></br>


        {/* {
          pessoas.map((p,index) =>
            <h2>
              id: {index},
              nome: {p}
            </h2>
          )
        } <br></br> */}

        <PrimeiroComponente/> <br></br>

        <img src={ams}></img> <br></br> <br></br> 

        <Button tipo="btn-submit"></Button> <br></br>

        <Button2 tipo="btn-submit"></Button2> <br></br>

        <ButtonJogo tipo="btn-alert"></ButtonJogo> <br></br>

        <ButtonLogin tipo="btn-alert"></ButtonLogin> <br></br>

        <BotaoLegal texto="Clique Aqui" mensagem="GOOOL" tipo="btn-submit" > </BotaoLegal>

        <BotaoLegal texto="NAO Clique Aqui" mensagem="ERRROU" tipo="btn-alert"></BotaoLegal>

        





    </div>
  );
}

export default App;
