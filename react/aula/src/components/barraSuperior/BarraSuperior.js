import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { TitleContext } from '../../context/TitleContext';
import { Link, useNavigate } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const BarraSuperior = () => {

  const { title } = useContext(TitleContext);
  const navigate = useNavigate()
  
  const [menuAberto, setMenuAberto] = useState(false)

  const itensMenu = [
    {
      texto: 'Inicio', 
      icone: (<HomeIcon/>),
      to: '/'
    },
    {
      texto: 'Cadastro de Pessoas', 
      icone: (<PersonAddIcon/>),
      to: '/cadastro'
    }
  ]


  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('logado')
    navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        <Toolbar>
          <MenuIcon sx={{ cursor: 'pointer' }} onClick={(e) => setMenuAberto(true)} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="inherit" onClick={handleLogout} >Sair</Button>
        </Toolbar>


        <Drawer anchor='left' open={menuAberto}>
          <Toolbar sx={{display:'flex', alignItems:'center', justifyContent: 'flex-end', px:[1]}}>
              <IconButton edge='start' onClick={(e) => setMenuAberto(false)}   >
                <ChevronLeftIcon/>
                </IconButton>
          </Toolbar>
          <Divider/>
          <List sx={{width:250}} >
            {itensMenu.map(itensMenu => (
              <Link key={itensMenu.texto} to={itensMenu.to} className="menuLink" >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{itensMenu.icone}</ListItemIcon>
                    <ListItemText primary={itensMenu.texto}/>
                  </ListItemButton>
                </ListItem>
              </Link>
           ))}
          </List>
        </Drawer>
      </AppBar>
    </Box>
  )
}

export default BarraSuperior