
import { Alert, Box, Button, Divider, TextField } from "@mui/material"
import { Container} from "@mui/system"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/LOGO-AGENDA-FACIL.png"
import api from "../../services/Api"



const Login = () => {
        const [usuario, setUsuario] = useState()
        const [senha, setSenha] = useState()
        const [error, setError] = useState()
        const navigate = useNavigate()

const handleSubmit = () =>{
    if (!usuario || !senha){
        setError ('Usuario e Senha Obrigatorios!')
        return
    } 
    
    api.post('login', {
        email: usuario,
        password: senha
    }).then (({data})=> {
        if (data.success === true) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('logado', true)
            navigate ('/')
        }
    }).catch((error)=> {
        if(error.response.status === 401){
            setError('Usuario ou Senha Invalidos')
            return
        }
    })
        
        
    
}

    return(
        <div className="App" >
            <Container maxWidth="xs" sx={{pt: 20}}>
                <Box sx={{display:'flex', flexDirection: "column", boxShadow:4, pb:4}} >
                    <Box sx={{maxWidth: '80%', width:'300px', margin: '0 auto',mt:5}}>
                        <img src={Logo} style={{width: '100%'}} alt='Logo'/>
                    </Box>
                    <Divider>Informe seu <strong>Login</strong> e <strong> Senha </strong> </Divider> 
                        <Box sx={{width:'90%', display:'flex', flexDirection: 'column', margin:'0 auto', mt:3}} >
                            {error && (<Alert security="error" sx={{mb:3}}>{error}</Alert>)}
                            <TextField id="outlined-basic" fullWidth label="Usuario" variant="outlined" onChange={(e)=>setUsuario(e.target.value)} onFocus={(e)=>setError()} />
                            <TextField id="outlined-basic" fullWidth sx={{my:4}}  label="Senha" variant="outlined" onChange={(e)=>setSenha(e.target.value)}type="password" onFocus={(e)=>setError()} />
                        </Box>
                    
                </Box>
                <Box sx={{mt:5, mx:'auto'}}>
                    <Button variant="contained" onClick={handleSubmit}>Logar</Button>
                </Box>

            </Container>

        </div>
        
    )
}
export default Login