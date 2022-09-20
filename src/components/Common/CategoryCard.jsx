import { alpha, Box, Card, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

CategoryCard.propTypes = {
  category: PropTypes.object,
}

function CategoryCard({ category }) {
  return (
    <Card
      sx={{
        borderRadius: 1,
        height: 175,

        backgroundImage: `url(${category.thumbnailUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

        '&:hover': {
          boxShadow: (theme) => theme.shadows[10],
        },
      }}
    >
      <Stack
        sx={{
          height: '100%',
          bgcolor: (theme) => alpha(theme.palette.common.black, 0.2),
          '&:hover': {
            backdropFilter: 'blur(5px)',

            span: {
              display: 'flex',
            },
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h6" component="span" fontWeight="bold" sx={{ display: 'none' }}>
            {category.title}
          </Typography>
        </Box>
      </Stack>
    </Card>
  )
}

export default CategoryCard
