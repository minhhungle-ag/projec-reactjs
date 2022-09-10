import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

About.propTypes = {}

const descriptionList = [
  ` Khải PC chuyên cung cấp các dịch vụ tinh học như: máy tính bàn,
  laptop, màng hình.`,
  `Linh kiện máy tính như: RAM, CPU, MAIN, FAN, NGUỒN, và các linh
kiện khác.`,
  `Linh kiện máy tính như: RAM, CPU, MAIN, FAN, NGUỒN, và các linh
kiện khác.`,
  `Chuyên thu mua máy tính cũ, laptop cũ, màng hình máy tính,linh
kiện máy tính.`,
  `Nhận thu mua thanh lý phòng game, máy tính công ty,
tính cá nhân`,
]

function About(props) {
  return (
    <Box>
      <Box>
        <Box
          component="img"
          width="100%"
          maxHeight="450px"
          src="https://assets.website-files.com/61d6d915d860cc3d5935aeef/61e179351c3b200659e6960f_About%20Us%20Image%202-min%20(1).jpg"
          alt="about"
        />
      </Box>

      <Container>
        <Stack direction="row" sx={{ my: 3, mx: -2 }} flexWrap="wrap">
          <Box sx={{ width: { xs: '100%', sm: 1 / 2 } }}>
            <Stack sx={{ maxWidth: '80%', p: 2 }}>
              <Typography variant="h4" fontWeight="bold">
                Giới thiệu
              </Typography>

              <Stack component="ul" spacing={1}>
                {descriptionList.map((item, idx) => (
                  <Typography variant="body1" component="li" key={idx}>
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: 1 / 2 } }}>
            <Box sx={{ p: 2 }}>
              <Box
                component="img"
                width="100%"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/305845367_103315892529002_3353881915035671002_n.png?stp=dst-png_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=kVSTk8z9lqAAX-VAbyb&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT9_l4Ftmzsg3HKI8DpCLc1qcVNWYqQW0KSbSnw8h5hYfQ&oe=6320C944"
                alt="about"
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default About
