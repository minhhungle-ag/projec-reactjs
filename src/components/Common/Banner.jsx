import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ArrowNext from './ArrowNext'
import ArrowPrev from './ArrowPrev'

Banner.propTypes = {
  bannerList: PropTypes.array,
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />,
}

function Banner({ bannerList }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 180, sm: 360 },
        overflow: 'hidden',
        borderRadius: '8px',

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
          <Box
            key={idx}
            sx={{
              minHeight: { xs: 180, sm: 360 },
              backgroundImage: `url(${item})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
      </Slider>
    </Box>
  )
}

export default Banner
