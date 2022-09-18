import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import CallIcon from '@mui/icons-material/Call'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import {
  alpha,
  Divider,
  InputBase,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
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
    width: 'auto',
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
      width: '20ch',
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
      color="inherit"
      sx={{
        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      }}
    >
      <Container>
        <Toolbar disableGutters>
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

          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mr: 1 }}>
            <CallIcon />{' '}
            <Typography
              variant="body1"
              component="a"
              href="tel:+0929414138"
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              0929414138 - 0903155357
            </Typography>
          </Stack>

          <IconButton size="large" color="inherit" sx={{ display: { md: 'none' } }}>
            <SearchIcon />
          </IconButton>

          <IconButton size="large" color="inherit">
            <ShoppingCartOutlinedIcon />
          </IconButton>

          <IconButton onClick={() => onChangeMode?.()} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>

        <Divider
          color="white"
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        />

        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              '& a': {
                py: 1,
              },

              '.active div': {
                fontWeight: 900,
              },
            }}
          >
            <NavLink to="trang-chu" className={({ isActive }) => (isActive ? 'active' : '')}>
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
                Trang chủ
              </Box>
            </NavLink>

            {menuList.map((item, idx) => (
              <NavLink
                to={`san-pham/${item.link}`}
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
          </Stack>
        </Box>
      </Container>
    </AppBar>
  )
}
export default Header
