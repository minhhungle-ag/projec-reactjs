import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined'
import { Stack, Typography } from '@mui/material'
import React from 'react'

function Logo(props) {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        variant="h3"
        noWrap
        sx={{
          fontFamily: 'Dancing Script',

          fontWeight: 900,
          letterSpacing: '.3rem',
          color: 'inherit', //monospace
          textDecoration: 'none',
        }}
      >
        K
      </Typography>

      <DevicesOutlinedIcon
        sx={{
          mx: -1.3,
          fontSize: { xs: 20, sm: 24 },
          color: 'inherit',
        }}
      />
    </Stack>
  )
}

export default Logo
