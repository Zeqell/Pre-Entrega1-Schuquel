import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = () => {
    return (<> <AddShoppingCartIcon sx={{ color: "white",}} /> <span style={{ color: "white" }}>(0)</span> </>);
}

export default CartWidget;