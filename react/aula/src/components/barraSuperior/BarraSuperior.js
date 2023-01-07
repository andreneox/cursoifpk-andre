import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { TitleContext } from '../../context/TitleContext';
import { useNavigate } from 'react-router-dom';

const BarraSuperior = () =>{

    const {title} = useContext(TitleContext);
    const navigate =useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token' )
        localStorage.removeItem('logado')
        navigate ('/login')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="inherit" onClick={handleLogout} >Sair</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default BarraSuperior