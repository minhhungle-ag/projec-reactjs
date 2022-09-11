import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { alpha, Box, Button, Container, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const bannerList = [
  {
    title: 'The new phones are here take a look.',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Scelerisque in est dui, aliquam, tempor. Faucibus morbi
    turpis.`,
    link: '',
    thumbnailUrl:
      'https://assets.website-files.com/61d6d915d860cc3d5935aeef/62337475ffd581b880e01bd8_First%20Slide%20Image%20(2).png',
  },

  {
    title: 'The iPad just got a new purpose!',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Scelerisque in est dui, aliquam, tempor. Faucibus morbi
    turpis.`,
    link: '',
    thumbnailUrl:
      'https://assets.website-files.com/61d6d915d860cc3d5935aeef/6233747209556434ae5957c3_Second%20Slide%20(2)%20(1).png',
  },

  {
    title: 'Your Pro setup just got better.',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Scelerisque in est dui, aliquam, tempor. Faucibus morbi
    turpis.`,
    link: '',
    thumbnailUrl:
      'https://assets.website-files.com/61d6d915d860cc3d5935aeef/62337473ecc98aeb5c540994_Third%20Slide%20(2)%20(1).png',
  },
]

Banner.propTypes = {}

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
  dots: true,
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
    <Box
      sx={{
        position: 'relative',
        width: '100%',

        backgroundColor: (theme) => alpha(theme.palette.common.black, 0.2),
        backdropFilter: '20px',

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
            <Container>
              <Stack direction="row" flexWrap="wrap">
                <Stack
                  justifyContent="center"
                  sx={{ width: { xs: '100%', sm: 1 / 2 } }}
                  spacing={3}
                >
                  <Typography variant="h2" fontWeight="bold">
                    {item.title}
                  </Typography>

                  <Typography variant="body1">{item.description}</Typography>

                  <Box
                    sx={{
                      '& a': {
                        color: 'inherit',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    <Link to={item.link}>
                      <Button variant="outlined" color="inherit">
                        Explore
                      </Button>
                    </Link>
                  </Box>
                </Stack>

                <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
                  <Box
                    component="img"
                    src={item.thumbnailUrl}
                    alt={`banner`}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Banner
