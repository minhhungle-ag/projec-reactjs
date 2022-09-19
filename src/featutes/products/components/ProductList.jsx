import { Box, Stack } from '@mui/material'
import React from 'react'
import ProductCard from '../../../components/Common/ProductCard'

import PropTypes from 'prop-types'

ProductList.propTypes = {
  productList: PropTypes.array,
}

function ProductList({ productList }) {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
      {Array.isArray(productList) &&
        productList.length > 0 &&
        productList.map((item, idx) => (
          <Box sx={{ width: { xs: 1 / 2, sm: 1 / 3 } }} key={idx}>
            <Box sx={{ p: 1 }}>
              <ProductCard product={item} />
            </Box>
          </Box>
        ))}
    </Stack>
  )
}

export default ProductList
