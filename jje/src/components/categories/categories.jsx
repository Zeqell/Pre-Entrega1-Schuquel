import {Card, CardContent, CircularProgress, Typography} from "@mui/material"
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json";
import { Link } from "react-router-dom";



const categories = () => {
const {data, loading} = useAsyncMock(products) 
    
    if (loading){
        return <CircularProgress/>
    }

    return ( <div className= "container">
        <Typography variant="h2" style={{color:"rgba(0, 0, 0, 0.87)"}}>
            Categorias
        </Typography>
{
    data.map((category)=>{
        return (
            <Card key={category.id}>
                <CardContent component={Link} to ={`/category/${category.category}`}>
                    <Typography>{category.category}</Typography>
                </CardContent>
            </Card>

        )
    })
}
    </div>);
}

export default categories;
