import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import StoreIcon from '@mui/icons-material/Store'
import { alpha, Box, Container, Divider, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { categoryMenu, footerPageList } from '../../constants/common'
import Logo from './Logo'

const infoList = [
  {
    desc: 'Chuyên cung cấp máy tính bàn, laptop, các sản phẩm dịch vụ tin học.',
    icon: null,
  },
  {
    desc: '0929414138 - 0903155357',
    icon: <CallIcon />,
  },
  {
    desc: '13 Thích Bửu Đăng, p.1, quận Gò Vấp, HCM',
    icon: <StoreIcon />,
  },
]

const socialListIcon = [
  {
    link: 'mailto:haless132@gmail.com',
    icon: <EmailIcon />,
  },
  {
    link: 'https://www.facebook.com/KH%E1%BA%A2I-PC-103287405865184',
    icon: <FacebookIcon />,
  },
  {
    link: '',
    icon: <InstagramIcon />,
  },
]

function Footer(props) {
  return (
    <Box
      component="footer"
      color="inherit"
      sx={{
        color: 'white',
        bgcolor: 'primary.main',

        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      }}
    >
      <Container>
        <Divider color="white" />

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ py: { xs: 2, md: 6 } }}
        >
          <Stack
            spacing={0.5}
            sx={{ py: 2, width: { xs: '100%', sm: 1 / 2, md: 'auto' }, flexGrow: 1 }}
          >
            <Logo />

            {infoList.map((item, idx) => (
              <Stack direction="row" alignItems="center" spacing={1} key={idx}>
                {item.icon}
                <Typography variant="body2">{item.desc}</Typography>
              </Stack>
            ))}
          </Stack>

          <Box sx={{ py: 2, width: { xs: '100%', sm: 1 / 2, md: 'auto' }, flexGrow: 1 }}>
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

          <Box sx={{ py: 2, width: { xs: '100%', sm: 1 / 2, md: 'auto' }, flexGrow: 1 }}>
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

          <Box sx={{ py: 2, width: { xs: '100%', sm: 1 / 2, md: 'auto' } }}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold">
                Mạng xã hội
              </Typography>

              <Stack direction="row" alignItem="center" spacing={1}>
                {socialListIcon.map((item, idx) => (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    component="a"
                    href={item.link}
                    key={idx}
                  >
                    {item.icon}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Divider color="white" />

        <Stack justifyContent="center" alignItems="center" sx={{ py: 2 }}>
          <Typography variant="body2" textAlign="center">
            © {new Date().getFullYear()} kcomputer.com. Power by Minh Hung Le.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
