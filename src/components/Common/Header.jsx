import { Close } from '@mui/icons-material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import PropTypes from 'prop-types'
import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { pageList } from '../../constants/menuList'
import Logo from './Logo'

Header.propTypes = {
  onChangeMode: PropTypes.func,
  mode: PropTypes.string,
  onDrawerToggle: PropTypes.func,
  mobileOpen: PropTypes.bool,
}

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

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },

              flexGrow: 1,

              '.active': {
                color: 'primary.main',
              },
            }}
          >
            {pageList.map((item, idx) => (
              <NavLink
                to={item.link}
                key={idx}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <Button key={item} color="inherit" sx={{ fontWeight: 'bold' }}>
                  {item.label}
                </Button>
              </NavLink>
            ))}
          </Stack>

          <IconButton size="large" color="inherit">
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
      </Container>
    </AppBar>
  )
}
export default Header
