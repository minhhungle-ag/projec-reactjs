import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productList } from '../../../api/data_face'
import ProductList from '../components/ProductList'
import ProductFilter from './ProductFilter'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
Products.propTypes = {}

function Products(props) {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId === 'all') {
      setProducts(productList)

      return
    }

    const newProduct = [...productList].filter((item) => item.category === categoryId)
    setProducts(newProduct)
  }, [categoryId])
  return (
    <Box>
      <Container>
        <Box sx={{ my: 2 }}>
          <Typography variant="h4" fontWeight="bold" display="flex" alignItems="center">
            Shops <ArrowRightIcon color="primary" fontSize="large" />
            {categoryId}
          </Typography>
        </Box>

        <Stack spacing={2} sx={{ my: 2 }}>
          <Box>
            <ProductFilter />
          </Box>

          <Box>
            <ProductList productList={products} />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Products
