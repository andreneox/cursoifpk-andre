import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Pessoas from './pages/Pessoas/Pessoas';
import FormPessoas from './pages/Pessoas/FormPessoa';
import Navbar from './components/Navbar';
import Pessoa from './pages/Pessoa';

function App() {
  return (
    <div className='App'>
      <h1> Topo da Página</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/pessoas" element={<Pessoas />}></Route>
          <Route path="/pessoas/store" element={<FormPessoas />}></Route>
          <Route path="/pessoa/:id" element={<Pessoa />}></Route>
        </Routes>

      </BrowserRouter>

      <h1>Rodape da Página</h1>

    </div>
  );
}

export default App;
