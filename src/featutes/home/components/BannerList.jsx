import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import AdvBanner from '../../../components/Common/AdvBanner'
import Banner from '../../../components/Common/Banner'
import { bannerList } from '../../../constants/bannerList'

BannerList.propTypes = {}

function BannerList(props) {
  return (
    <Box>
      <Container>
        <Stack direction="row" spacing={1}>
          <Box sx={{ width: { xs: '100%', md: 2 / 3 } }}>
            <Banner bannerList={bannerList} />
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 1 / 3,
              height: 360,
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <AdvBanner
              title="ARMED PC GAMER"
              subtitle=" Choose your pc and play!"
              label="Shop now"
              thumbnailUrl="https://templatecat-megabyte.netlify.app/img/categories/sec-desktop-g.jpg"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default BannerList
