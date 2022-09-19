import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuList } from '../../constants/menuList'

BottomMenu.propTypes = {}

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
              key={idx}
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
