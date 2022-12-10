// import logo from './logo.svg';
import './App.css';
import BotaoLegal from './components/BotaoLegal/BotaoLegal';
import Titulo from './components/titulo';
import Card from './components/Card/Card';
import Formulario from './components/Formulario/Formulario';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext';


function App() {
  
  const {user, setUser} = useContext(UserContext)

  

  return (
    
    <div className="App">

      <Titulo></Titulo>

      <Card titulo="Primeiro Card">
        <h3>Children do Card</h3>
        <h4>Outro children do card</h4>
        Fim do Card
      </Card>
          
      <br></br><br></br>
      <BotaoLegal texto="Botao OK" ></BotaoLegal>

      <br></br><br></br>
      <Formulario botao={<BotaoLegal texto="Novo Botao"/>}></Formulario>
      <br></br><br></br>
      <BotaoLegal texto="Botao Legallll" />
      <user/>
    </div>
  );
}

export default App;
