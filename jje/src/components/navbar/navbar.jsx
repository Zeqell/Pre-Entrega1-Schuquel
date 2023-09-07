import { AppBar, Button, Toolbar, Typography} from '@mui/material';
import './navbar.css';
import CartWidget from '../cartwidget/cartwidget';

const navbar = () => {

    return ( <AppBar>
        <Toolbar className='toolbar-navbar' sx={{display: "flex", justifyContent: "space-around"}}>
            <Typography sx={{color: "white"}} >
                JJE
            </Typography>
            <Button sx={{color: "white"}}>
                Home
            </Button>
            <Button sx={{color: "white"}}>
                Materiales
            </Button>
            <Button sx={{color: "white"}}>
                Productos
            </Button>            
            <CartWidget />
        </Toolbar>
    </AppBar>);
}

export default navbar;
