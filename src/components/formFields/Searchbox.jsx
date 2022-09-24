import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'
import debounce from 'lodash/debounce'
import React from 'react'

export function SearchBox({ placeholder = 'Tìm kiếm...', onSearchChange }) {
  const handleSearchChange = debounce((event) => {
    onSearchChange?.(event.target.value)
  }, 600)

  return (
    <TextField
      sx={{
        width: '100%',
      }}
      size="small"
      placeholder={placeholder}
      onChange={(event) => handleSearchChange(event)}
      InputProps={{
        'aria-label': 'search',
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBox
