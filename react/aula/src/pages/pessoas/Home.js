import React from 'react'
import VerificaLogin from '../../components/verificarLogin/VerificaLogin'
import BarraSuperior from '../../components/barraSuperior/BarraSuperior'

const Home = () => {
 return (
    <VerificaLogin>
        <BarraSuperior/>
        <h1>
        Página Inicial
        </h1>
    </VerificaLogin>
   
 )
}

export default Home