import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import CategoryCard from '../../../components/Common/CategoryCard'
import PropTypes from 'prop-types'

CategoryList.propTypes = {
  title: PropTypes.string,
  categoryList: PropTypes.array,
}
function CategoryList({ title, categoryList }) {
  return (
    <Box>
      <Container>
        <Typography variant="h3" fontWeight={700} sx={{ mb: 1, textAlign: 'center' }}>
          {title}
        </Typography>

        <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mx: -2 }}>
          {Array.isArray(categoryList) &&
            categoryList.length > 0 &&
            categoryList.map((item, idx) => (
              <Box
                sx={{
                  width: { xs: '100%', sm: 1 / 2, md: 1 / 4 },
                  p: 2,
                  cursor: 'pointer',
                }}
                key={idx}
              >
                <CategoryCard category={item} />
              </Box>
            ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default CategoryList
