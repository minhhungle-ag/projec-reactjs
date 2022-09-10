import React from 'react'
import PropTypes from 'prop-types'
import { Button, Stack, Typography } from '@mui/material'

TabList.propTypes = {
  selectedKey: PropTypes.string,
  tabList: PropTypes.array,
  onTabClick: PropTypes.func,
}

function TabList({ selectedKey, tabList, onTabClick }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {tabList.map((item, idx) => (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            p: 0.5,
            borderBottom: '2px solid',
            borderColor: selectedKey === item.link ? 'primary.main' : 'transparent',
            color: selectedKey === item.link ? 'primary.main' : 'inherit',
            cursor: 'pointer',
          }}
          onClick={() => onTabClick?.(item)}
        >
          <Typography>{item.label}</Typography>
        </Stack>
      ))}
    </Stack>
  )
}

export default TabList
