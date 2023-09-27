import { AppBar, Button, Toolbar, Typography} from '@mui/material';
import './navbar.css';
import CartWidget from '../cartwidget/cartwidget';
import { NavLink } from 'react-router-dom';

const navbar = () => {

    return ( <AppBar sx = {{backgroundColor:"black"}}>
        <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
            <NavLink className="navbar-link" to = "/">
                <Typography sx={{color: "white"}} >
                    JJE
                </Typography>
            </NavLink>
            <NavLink className="navbar-link" to = "/">
                <Button sx={{color: "white"}}>
                    Home
                </Button>
            </NavLink>
            <NavLink className="navbar-link" to = "/products">
                <Button sx={{color: "white"}}>
                    Productos
                </Button>
            </NavLink>
            <NavLink className="navbar-link" to = "/category">
                <Button sx={{color: "white"}}>
                    Categorias
                </Button>             
            </NavLink>            
            <CartWidget />
        </Toolbar>
    </AppBar>);
}

export default navbar;
