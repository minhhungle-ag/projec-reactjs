import { alpha, Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
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

              backgroundImage: `url('https://templatecat-megabyte.netlify.app/img/categories/sec-desktop-g.jpg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Stack
              alignItems="flex-start"
              justifyContent="center"
              spacing={2}
              sx={{ p: 2, bgcolor: (theme) => alpha(theme.palette.common.black, 0.5) }}
            >
              <Typography variant="h5" fontWeight="bold" color="white">
                BUILD PC THEO YÊU CẦU
              </Typography>

              <Typography variant="body1" fontWeight="bold" color="white">
                Nhận xây dựng PC theo giá thành, theo nhu cầu khách hàng. Nhận máy sau 1 ngày.
              </Typography>

              <Button variant="contained">Xem ngay</Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default BannerList
