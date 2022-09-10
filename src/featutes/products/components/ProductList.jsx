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
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
      {Array.isArray(productList) &&
        productList.length > 0 &&
        productList.map((item, idx) => (
          <Box sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 4 } }} key={idx}>
            <Box sx={{ p: 2 }}>
              <ProductCard product={item} />
            </Box>
          </Box>
        ))}
    </Stack>
  )
}

export default ProductList
