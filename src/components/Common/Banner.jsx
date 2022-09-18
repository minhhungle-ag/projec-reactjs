import { Box, Container } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ArrowNext from './ArrowNext'
import ArrowPrev from './ArrowPrev'

const bannerList = [
  'https://templatecat-megabyte.netlify.app/img/banner/banner-1.jpg',
  'https://templatecat-megabyte.netlify.app/img/banner/banner-2.jpg',
  'https://templatecat-megabyte.netlify.app/img/banner/banner-3.jpg',
]

Banner.propTypes = {}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />,
}

function Banner(props) {
  return (
    <Container>
      <Box
        sx={{
          position: 'relative',

          '&:hover': {
            '.prev': {
              display: { xs: 'none', md: 'flex' },
            },
            '.next': {
              display: { xs: 'none', md: 'flex' },
            },
          },
        }}
      >
        <Slider {...settings}>
          {bannerList.map((item, idx) => (
            <Box key={idx}>
              <Box
                component="img"
                src={item}
                alt="banner"
                sx={{ width: '100%', visibility: 'middle', maxHeight: 400 }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  )
}

export default Banner
