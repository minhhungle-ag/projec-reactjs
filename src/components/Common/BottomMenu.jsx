import CategoryIcon from '@mui/icons-material/Category'
import DevicesIcon from '@mui/icons-material/Devices'
import LaptopIcon from '@mui/icons-material/Laptop'
import MonitorIcon from '@mui/icons-material/Monitor'
import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

BottomMenu.propTypes = {}

export const menuList = [
  { label: 'Tất cả SP', link: 'tat-ca', icon: <CategoryIcon /> },
  { label: 'Máy bàn', link: 'may-ban', icon: <DevicesIcon /> },
  { label: 'Laptop', link: 'laptop', icon: <LaptopIcon /> },
  { label: 'Màng hình', link: 'mang-hinh', icon: <MonitorIcon /> },
]

function BottomMenu() {
  return (
    <AppBar position="fixed" color="inherit" sx={{ bottom: 0, top: 'auto' }}>
      <Toolbar disableGutters>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{ width: '100%', py: 1 }}
        >
          {menuList.map((item, idx) => (
            <Box
              disablePadding
              sx={{
                '& a': {
                  width: '100%',
                  color: 'inherit',
                  textDecoration: 'none',
                },
                '.active': {
                  fontWeight: 'bold',
                  color: 'primary.main',
                },
              }}
            >
              <NavLink
                to={`san-pham/${item.link}`}
                key={idx}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <Box sx={{ textAlign: 'center' }}>
                  {item.icon}
                  <Typography>{item.label}</Typography>
                </Box>
              </NavLink>
            </Box>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default BottomMenu
