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
        <Typography variant="h3" fontWeight={700} sx={{ mb: 1, textAlign: 'center' }}>
          {title}
        </Typography>

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
      </Container>
    </Box>
  )
}

export default ProductList
