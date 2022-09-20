import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import CallIcon from '@mui/icons-material/Call'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { alpha, InputBase, Stack, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import PropTypes from 'prop-types'
import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { menuList } from '../../constants/menuList'
import Logo from './Logo'

Header.propTypes = {
  onChangeMode: PropTypes.func,
  mode: PropTypes.string,
  onDrawerToggle: PropTypes.func,
  mobileOpen: PropTypes.bool,
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'none',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid',
  borderColor: alpha(theme.palette.common.black, 0.15),
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    marginLeft: theme.spacing(3),
    width: '350px',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      width: 250,
    },

    transition: theme.transitions.create('width'),
  },
}))

export function Header({ mobileOpen, mode, onDrawerToggle, onChangeMode }) {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <AppBar
      position={md ? 'sticky' : 'static'}
      sx={{
        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ py: { md: 1.5 } }}>
          <Link to="/">
            <Logo />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton size="large" color="inherit" sx={{ display: { md: 'none' } }}>
            <SearchIcon />
          </IconButton>

          <IconButton size="large" color="inherit">
            <ShoppingCartOutlinedIcon />
          </IconButton>

          <IconButton onClick={() => onChangeMode?.()} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ ml: 1 }}
            component="a"
            href="tel:+0929414138"
          >
            <CallIcon />{' '}
            <Typography variant="body1" sx={{ display: { xs: 'none', md: 'flex' } }}>
              0101-010101
            </Typography>
          </Stack>
        </Toolbar>
      </Container>

      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
          bgcolor: 'white',
          color: 'black',
        }}
      >
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2.5}
            sx={{
              '& a': {
                py: 1,
              },

              '.active div': {
                color: 'primary.main',
                fontWeight: 'bold',
              },
            }}
          >
            <NavLink to="home" className={({ isActive }) => (isActive ? 'active' : '')}>
              <Box
                color="inherit"
                sx={{
                  borderBottom: '2px solid',
                  borderColor: 'transparent',

                  '&:hover': {
                    borderColor: 'white',
                  },
                }}
              >
                Home
              </Box>
            </NavLink>

            {menuList.map((item, idx) => (
              <NavLink
                to={`products/${item.link}`}
                key={idx}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <Box
                  key={item}
                  color="inherit"
                  sx={{
                    borderBottom: '2px solid',
                    borderColor: 'transparent',

                    '&:hover': {
                      borderColor: 'white',
                    },
                  }}
                >
                  {item.label}
                </Box>
              </NavLink>
            ))}

            <NavLink to="About" className={({ isActive }) => (isActive ? 'active' : '')}>
              <Box
                color="inherit"
                sx={{
                  borderBottom: '2px solid',
                  borderColor: 'transparent',

                  '&:hover': {
                    borderColor: 'white',
                  },
                }}
              >
                About
              </Box>
            </NavLink>

            <NavLink to="contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              <Box
                color="inherit"
                sx={{
                  borderBottom: '2px solid',
                  borderColor: 'transparent',

                  '&:hover': {
                    borderColor: 'white',
                  },
                }}
              >
                Contact
              </Box>
            </NavLink>
          </Stack>
        </Container>
      </Box>
    </AppBar>
  )
}
export default Header
