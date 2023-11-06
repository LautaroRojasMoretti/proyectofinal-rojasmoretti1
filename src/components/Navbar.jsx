import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (<AppBar sx={{ backgroundColor: "orange" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around", overflow: "auto"}}>
            <NavLink className="navbar-link" to="/">
                <Typography>
                Home | Categorias
                </Typography>
            </NavLink>
            <NavLink className="navbar-link" to="/products">
                <Button sx={{ color: "white" }}>
                    Productos
                </Button>
            </NavLink> 
            <NavLink className="navbar-link" to="/cart">
                <CartWidget>

                </CartWidget>
            </NavLink>
        </Toolbar>
    </AppBar>)
}

export default Navbar;