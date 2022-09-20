import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import AdvBanner from '../../../components/Common/AdvBanner'

AdvBannerList.propTypes = {}

function AdvBannerList(props) {
  return (
    <Container>
      <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
        <Box sx={{ width: { xs: '100%', md: 1 / 2 }, minHeight: 300, p: 1 }}>
          <AdvBanner
            title="NOTEBOOKS"
            subtitle="Choose the ideal laptop for you!"
            label="Show more"
            thumbnailUrl="https://templatecat-megabyte.netlify.app/img/categories/sec-notebooks.jpg"
          />
        </Box>

        <Box sx={{ width: { xs: '100%', md: 1 / 2 }, minHeight: 300, p: 1 }}>
          <AdvBanner
            title="DESKTOPS"
            subtitle="Build your PC at the best price!"
            label="Show more"
            thumbnailUrl="https://templatecat-megabyte.netlify.app/img/categories/sec-desktops.jpg"
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default AdvBannerList
