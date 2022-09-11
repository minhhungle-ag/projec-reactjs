import { alpha, Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { categoryMenu, footerPageList, socialList } from '../../constants/common'
import Logo from './Logo'

function Footer(props) {
  return (
    <Box
      sx={{
        borderTop: '1px solid ',
        borderColor: 'divider',
        backgroundColor: (theme) => alpha(theme.palette.common.black, 0.7),
        color: 'white',

        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      }}
    >
      <Container>
        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box sx={{ py: 3, width: { xs: '100%', sm: 1 / 2, lg: 1 / 3 } }}>
            <Logo />
            <Typography variant="body2" width="70%">
              Chuyên cung cấp các sản phẩm dịch và dịch vụ tin học
            </Typography>
          </Box>

          <Box sx={{ py: 3, width: { xs: '100%', sm: 1 / 2, lg: 1 / 5 } }}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold">
                Tất cả sản phẩm
              </Typography>

              <Stack spacing={1}>
                {Array.isArray(categoryMenu) &&
                  categoryMenu.map((item, idx) => (
                    <Typography variant="body2" key={idx}>
                      {item.label}
                    </Typography>
                  ))}
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ py: 3, width: { xs: '100%', sm: 1 / 2, lg: 1 / 5 } }}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold">
                Về chúng tôi
              </Typography>

              <Stack spacing={1}>
                {Array.isArray(footerPageList) &&
                  footerPageList.map((item, idx) => (
                    <Typography variant="body2" key={idx}>
                      {item.label}
                    </Typography>
                  ))}
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ py: 3, width: { xs: '100%', sm: 1 / 2, lg: 1 / 5 } }}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold">
                Theo dõi chúng tôi
              </Typography>

              <Stack spacing={1}>
                {Array.isArray(socialList) &&
                  socialList.map((item, idx) => (
                    <Typography variant="body2" key={idx}>
                      {item.label}
                    </Typography>
                  ))}
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Divider color="white" />

        <Stack justifyContent="center" alignItems="center" sx={{ p: 2 }}>
          <Typography variant="body2" textAlign="center">
            © {new Date().getFullYear()} KComputer. Power by Minh Hung Le.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
