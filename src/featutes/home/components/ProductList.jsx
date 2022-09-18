import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../../../components/Common/ProductCard'

import PropTypes from 'prop-types'

ProductList.propTypes = {
  title: PropTypes.string,
  productList: PropTypes.array,
}

function ProductList({ title, productList }) {
  return (
    <Box>
      <Container>
        <Typography variant="h5" color="primary" textAlign="center" fontWeight={700} sx={{ mb: 1 }}>
          {title}
        </Typography>

        <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
          {Array.isArray(productList) &&
            productList.length > 0 &&
            productList.map((item, idx) => (
              <Box sx={{ width: { xs: 1 / 2, sm: 1 / 3, md: 1 / 5 } }} key={idx}>
                <Box sx={{ p: 1 }}>
                  <ProductCard product={item} />
                </Box>
              </Box>
            ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default ProductList
