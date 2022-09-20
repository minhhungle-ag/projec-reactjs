import { Box, Container } from '@mui/material'
import React from 'react'
import AdvBanner from '../../../components/Common/AdvBanner'

DESKTOPS.propTypes = {}

function DESKTOPS(props) {
  return (
    <Container>
      <Box sx={{ height: 450 }}>
        <AdvBanner
          title="DESKTOPS"
          subtitle="Build your PC at the best price!"
          label="Show more"
          thumbnailUrl="https://templatecat-megabyte.netlify.app/img/categories/sec-desktops.jpg"
        />
      </Box>
    </Container>
  )
}

export default DESKTOPS
