import React, { useContext, useEffect, useState } from 'react'
import VerificaLogin from '../../components/verificarLogin/VerificaLogin'
import BarraSuperior from '../../components/barraSuperior/BarraSuperior'
import {TitleContext }from '../../context/TitleContext'
import api from "../../services/Api"

const Home = () => {
const [pessoas, setPessoas] = useState ([])
const {setTitle} = useContext(TitleContext)


useEffect(()=>{
    setTitle('Listagem de Pessoas')

}, [setTitle])


useEffect(()=>{
    api.get ('api/', {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(({data})=> {
        setPessoas(data.data)
    })

}, [setPessoas])


 return (
    <VerificaLogin>
        <BarraSuperior/>
        
            {pessoas.map((pessoa, key)=>(
                <div key={key} >
                    <h2>Nome: {pessoa.nome}</h2>
                    <h2>Email: {pessoa.email}</h2>
                    {/* {pessoa.telefone.map((telefone)=>(
                        <>
                            {telefone.pessoaId}
                        </>
                    ))} */}
                </div>    


            ))}
    </VerificaLogin>
   
 )
}

export default Home