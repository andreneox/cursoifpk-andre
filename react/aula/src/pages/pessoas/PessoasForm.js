import { useContext, useEffect, useState } from "react"
import BarraSuperior from "../../components/barraSuperior/BarraSuperior"
import VerificaLogin from "../../components/verificarLogin/VerificaLogin"
import { TitleContext } from "../../context/TitleContext"
import api from "../../services/Api"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from "@mui/system"
import { Button, Divider, Alert, Paper, Snackbar,  } from "@mui/material"

const PessoasForm = () => {

    const { setTitle } = useContext(TitleContext)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [data_nascimento, setData_nascimento] = useState('')
    const [sucesso, setSucesso] = useState(true)


    const handleSubmit = () => {
        api.post('api/cadastro', {
            nome: nome,
            email: email,
            data_nascimento: data_nascimento
        },{
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then (({data})=>{
            setSucesso( false)
            // navigate ('/')
        })
    }

        useEffect(() => {
            setTitle('Cadastro de Pessoas')

        }, [setTitle])




    return (
        <VerificaLogin>
            <BarraSuperior />
            <Container>
                <Box sx={{ p: 5, pb: 6, mt: 5, display: 'flex', flexDirection: 'column' }} component={Paper} >
                    <Snackbar open={sucesso}   >
                        <Alert security="success" sx={{mb:4}}>Registro Salvo com Sucesso!</Alert>
                    </Snackbar>
                    <Divider sx={{ color: 'gray', mt: 1, mb: 3 }} ><small>Digite as Informações no Formulário Abaixo</small></Divider>
                    <TextField focused sx={{ mb: 2 }} label="Nome" variant="standard" fullWidth autoFocus
                        onChange={(e) => setNome(e.target.value)} value={nome} />
                    <TextField focused type="email" sx={{ mb: 2 }} label="Email" variant="standard" fullWidth autoFocus
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    <TextField focused type="date" sx={{ mb: 2 }} label="Data de Nascimento" variant="standard" fullWidth autoFocus
                        onChange={(e) => setData_nascimento(e.target.value)} value={data_nascimento} />

                    <Button variant="contained" sx={{ mt: 5 }} onClick={handleSubmit}  >Salvar</Button>

                </Box>
            </Container>
        </VerificaLogin>



    )
}
export default PessoasForm