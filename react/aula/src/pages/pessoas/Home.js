import React, { useContext, useEffect, useState } from 'react'
import VerificaLogin from '../../components/verificarLogin/VerificaLogin'
import BarraSuperior from '../../components/barraSuperior/BarraSuperior'
import { TitleContext } from '../../context/TitleContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from "../../services/Api"
import { Box, Container } from '@mui/system';

const Home = () => {
    const [pessoas, setPessoas] = useState([])
    const { setTitle } = useContext(TitleContext)


    useEffect(() => {
        setTitle('Listagem de Pessoas')

    }, [setTitle])


    useEffect(() => {
        api.get('api/', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(({ data }) => {
            setPessoas(data.data)
            console.log(data.data)
        })

    }, [setPessoas])


    return (
        <VerificaLogin>
            <BarraSuperior />
            <Container maxWidth="x1" >
                <Box sx={{ p: 3 }} >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>

                                    <TableCell align="right">Nome</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Data de Nascimento</TableCell>
                                    <TableCell align="right">telefone</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pessoas.map((pessoa) => (
                                    <TableRow
                                        key={pessoa.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right" component="th" scope="row">
                                            {pessoa.nome}
                                        </TableCell>

                                        <TableCell align="right">{pessoa.email}</TableCell>
                                        <TableCell align="right">{pessoa.data_nascimento}</TableCell>
                                        <TableCell align="right">{pessoa.telefones.map((telefone) => (
                                            <>
                                                {telefone.numero}
                                            </>
                                        ))}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Box>

            </Container>

            
        </VerificaLogin>

    )
}

export default Home