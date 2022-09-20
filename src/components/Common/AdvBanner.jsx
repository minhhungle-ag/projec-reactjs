import React from 'react'
import PropTypes from 'prop-types'
import { alpha, Box, Button, Stack, Typography } from '@mui/material'
import { TitleRounded } from '@mui/icons-material'

AdvBanner.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

function AdvBanner({ thumbnailUrl, title, subtitle, label, onClick }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        overflow: 'hidden',

        backgroundImage: `url(${thumbnailUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Stack
        alignItems="flex-start"
        justifyContent="center"
        spacing={2}
        sx={{
          width: '100%',
          height: '100%',
          p: 2,
          bgcolor: (theme) => alpha(theme.palette.common.black, 0.5),

          '&:hover': {
            backdropFilter: 'blur(5px)',
          },
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="white">
          {title}
        </Typography>

        <Typography variant="body1" fontWeight="bold" color="white">
          {subtitle}
        </Typography>

        <Button variant="contained" onClick={() => onClick?.()}>
          {label}
        </Button>
      </Stack>
    </Box>
  )
}

export default AdvBanner
