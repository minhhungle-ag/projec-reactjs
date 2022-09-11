import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Container, IconButton } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const bannerList = [
  'https://www.computeralliance.com.au/adv/3189_2.gif',
  // 'https://www.computeralliance.com.au/adv/3156_2.jpg',
  'https://www.computeralliance.com.au/adv/3167_3.jpg',
  'https://www.computeralliance.com.au/adv/3181_1.gif',
  'https://www.computeralliance.com.au/adv/3148_2.jpg',
  'https://www.computeralliance.com.au/adv/3150_1.jpg',
  'https://www.computeralliance.com.au/adv/3174_2.jpg',
  'https://www.computeralliance.com.au/adv/3178_1.jpg',
  'https://www.computeralliance.com.au/adv/2966_6.jpg',
  'https://www.computeralliance.com.au/adv/3195_1.jpg',
  // 'https://www.computeralliance.com.au/adv/3198_1.jpg',
  // 'https://www.computeralliance.com.au/adv/3187_1.jpg',
  'https://www.computeralliance.com.au/adv/3155_1.jpg',
]

function ArrowNext({ onClick }) {
  return (
    <IconButton
      size="large"
      color="inherit"
      className="next"
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: 'calc(50% - 24px)',
        right: 5,
        zIndex: 1,

        display: 'none',
      }}
    >
      <ArrowForwardIcon fontSize="large" />
    </IconButton>
  )
}

function ArrowPrev({ onClick }) {
  return (
    <IconButton
      size="large"
      color="inherit"
      onClick={onClick}
      className="prev"
      sx={{
        position: 'absolute',
        top: 'calc(50% - 24px)',
        left: 5,
        zIndex: 1,

        display: 'none',
      }}
    >
      <ArrowBackIcon fontSize="large" />
    </IconButton>
  )
}

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  // nextArrow: <ArrowNext />,
  // prevArrow: <ArrowPrev />,
}

export default function ThumbnailBanner(props) {
  return (
    <Box
      sx={{
        position: 'relative',
        color: 'white',
        overflow: 'hidden',

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
            <Box component="img" src={item} alt={`banner`} width="100%" maxHeight="350px" />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
