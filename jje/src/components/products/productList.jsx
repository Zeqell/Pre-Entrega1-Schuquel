import { CircularProgress, Grid, Typography, stepClasses} from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json";
import ProductDetail from "./productDetail";

const productList = () => {
    const { data, loading} = useAsyncMock (products)

    if (loading) return <CircularProgress/>

    return (<div className="container">
        <Typography variant="h2" style={{color: "rgba(0, 0, 0, 0.87)"}}>
            Productos
        </Typography>
        <Grid container spacing={3}>
            {
                data.map((products)=>{
                    return(
                        <ProductDetail key={products.id} products={products}>
                            
                        </ProductDetail>
                    )
                })
            }
        </Grid>
    </div>);
}

export default productList;