import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <h1> Topo da Página</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sobre" element={<Sobre/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

    <h1>Rodape da Página</h1>

    </div>
  );
}

export default App;
