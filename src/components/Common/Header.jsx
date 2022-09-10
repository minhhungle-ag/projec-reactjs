import { Close } from '@mui/icons-material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { alpha, Divider, InputBase, Stack, styled } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
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
  marginLeft: 0,

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    border: '2px solid',
    borderColor: alpha(theme.palette.primary.main, 0.5),
    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.up('sm')]: {
      minWidth: '30ch',
    },

    [theme.breakpoints.up('md')]: {
      minWidth: '40ch',
    },

    '&:focus': {
      borderColor: alpha(theme.palette.primary.main, 1),
    },
  },
}))

export function Header({ mobileOpen, mode, onDrawerToggle, onChangeMode }) {
  return (
    <AppBar
      position="fixed"
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
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <Logo />
            </Link>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton size="large" color="inherit" sx={{ display: { sm: 'none' } }}>
            <SearchIcon fontSize="medium" />
          </IconButton>

          <IconButton size="large" color="inherit">
            <ShoppingCartOutlinedIcon fontSize="medium" />
          </IconButton>

          <IconButton onClick={() => onChangeMode?.()} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            onClick={() => onDrawerToggle?.()}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            {mobileOpen ? <Close /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        <Divider
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        />

        <Toolbar
          disableGutters
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
            spacing={1}
            sx={{
              flexGrow: 1,

              '.active': {
                color: 'primary.main',
              },
            }}
          >
            {menuList.map((item, idx) => (
              <NavLink
                to={`/san-pham/${item.link}`}
                key={idx}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <Button key={item} color="inherit" sx={{ fontWeight: 'bold' }}>
                  {item.label}
                </Button>
              </NavLink>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
