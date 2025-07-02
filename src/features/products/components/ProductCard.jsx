import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { mockProducts } from "../data/mockProducts"


export default function ProductCard({ product }) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'

            }}>

            <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ height: 200 }}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Typography variant="h6">
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                }}>
                    {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                    ${product.price}
                </Typography>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => {/* We'll add cart functionality later */ }}
                >
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    )
}