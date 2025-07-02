import ProductCard from "./features/products/components/ProductCard"
import { mockProducts } from "./features/products/data/mockProducts"
import './App.css'
import { Grid } from "@mui/material"

function App() {
  return (
<Grid container spacing={3}>
    {mockProducts.map(product => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <ProductCard product={product} />
        </Grid>
    ))}
</Grid>
  )
}

export default App
