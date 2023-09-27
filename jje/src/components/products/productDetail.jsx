import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react";

const productDetail = ({products, children}) => {
    const {id,image, title, price} = products
    const [iseSelected, setIsSelected] = useState(false);

    return (<Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className="card-products-container">
            <img src={image}/>
        
            <CardContent>
                <Typography>{title}</Typography>
                <Typography>{price.toFixed(2)}</Typography>
            </CardContent>
        </Card>
    </Grid>);
    
    
}

export default productDetail;