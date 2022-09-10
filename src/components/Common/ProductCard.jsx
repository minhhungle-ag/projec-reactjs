import { Box, Card, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { formatPrice, truncateText } from '../../utils/common'

ProductCard.propTypes = {
  product: PropTypes.object,
}

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        borderRadius: '4px',
        cursor: 'pointer',

        '&:hover': {
          boxShadow: (theme) => theme.shadows[10],
        },
      }}
    >
      <Stack>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 0,
            pt: '56.25%',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={product.thumbnailUrl}
            alt={product.thumbnailUrl}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </Box>

        <Stack
          spacing={0.5}
          sx={{
            p: 2,
            flexGrow: 1,
          }}
        >
          <Typography variant="body1">{product.subtitle}</Typography>

          <Typography variant="h6" fontWeight={700}>
            {product.title}
          </Typography>

          <Typography variant="body1" fontStyle="italic" fontWeight={500}>
            Giá: {formatPrice(product.price)}
          </Typography>

          <Typography variant="body2">
            {truncateText(
              `Màng hình: ${product?.info?.screen} | CPU: ${product?.info?.CPU} |
            Card: ${product?.info?.card} | Pin: ${product?.info?.battery} | Khối
            lượng: ${product?.info?.weight}`,
              100
            )}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export default ProductCard
