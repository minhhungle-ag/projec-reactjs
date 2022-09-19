import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productList } from '../../../api/data_face'
import ProductList from '../components/ProductList'

Products.propTypes = {}

function Products(props) {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId === 'tat-ca') {
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
          <Typography variant="h4" fontWeight="bold">
            Sản phẩm
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={{ my: 2 }}>
          <Box boxShadow={1} sx={{ width: 1 / 4, height: '100%', my: 1, p: 2 }}>
            Filter
          </Box>

          <Box sx={{ width: 3 / 4 }}>
            <ProductList productList={products} />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Products
