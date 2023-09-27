import { useParams } from "react-router-dom";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json"
import { CircularProgress, Grid } from "@mui/material";
import ProductDetail from "../products/productDetail";


const CategoriesProductList = () => {
    const {categotyId} = useParams();
    const {data, loading}= useAsyncMock (products)
    
    if(loading) return <CircularProgress/>

    const categorySelected = data.filter(category => category.category.toLowerCase() === categotyId.toLocaleLowerCase());

    return (<div className="container">
        <Grid container spacing={3}>
            {categorySelected.map((products)=>{
                return <ProductDetail key={products.id} products={products}/>
            })}
        </Grid>
    </div>  );
}

export default CategoriesProductList;