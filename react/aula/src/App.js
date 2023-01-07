
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/pessoas/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
