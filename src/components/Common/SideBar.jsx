import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuList } from '../../constants/menuList'
import Logo from './Logo'

SideBar.propTypes = {
  mobileOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

function SideBar({ mobileOpen, onClose }) {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={() => onClose?.()}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& a': {
          textDecoration: 'none',
          color: 'inherit',
        },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '70%' },
      }}
    >
      <Stack direction="row" justifyContent="center" sx={{ p: 1 }}>
        <Logo />
      </Stack>

      <Divider />

      <List>
        {menuList.map((item, idx) => (
          <ListItem
            disablePadding
            onClick={() => onClose?.()}
            sx={{
              '& a': {
                width: '100%',
                color: 'inherit',
                textDecoration: 'none',
              },
              '.active': {
                bgcolor: 'primary.light',
              },
            }}
          >
            <NavLink
              to={`/san-pham/${item.link}`}
              key={idx}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideBar
