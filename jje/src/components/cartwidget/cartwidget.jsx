import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';
import { useCartContext } from '../../Context/CartContect';
const CartWidget = () => {
    const { cart } = useCartContext();

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <ShoppingCartIcon />
            <Typography>{cart.items.length}</Typography>
        </div>


    );
}

export default CartWidget;