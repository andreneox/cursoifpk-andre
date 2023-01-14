import React, { useContext, useEffect } from 'react'
import VerificaLogin from '../../components/verificarLogin/VerificaLogin'
import BarraSuperior from '../../components/barraSuperior/BarraSuperior'
import {TitleContext }from '../../context/TitleContext'
import api from "../../services/Api"

const Home = () => {

const {setTitle} = useContext(TitleContext)


useEffect(()=>{
    setTitle('Listagem de Pessoas')

}, [setTitle])


useEffect(()=>{
    api.get ('api/', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then()

}, [setTitle])


 return (
    <VerificaLogin>
        <BarraSuperior/>
        <h1>
        Listagem de Pessoas
        </h1>
    </VerificaLogin>
   
 )
}

export default Home