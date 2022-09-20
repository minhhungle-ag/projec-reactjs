import { Box, Stack } from '@mui/material'
import React from 'react'

function Logo(props) {
  return (
    <Stack direction="row" alignItems="center">
      <Box component="img" src="https://templatecat-megabyte.netlify.app/img/logo.png" alt="logo" />
    </Stack>
  )
}

export default Logo
