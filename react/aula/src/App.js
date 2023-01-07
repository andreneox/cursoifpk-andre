
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/pessoas/Home';
import PessoasForm from './pages/pessoas/PessoasForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<PessoasForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
