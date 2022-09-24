import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import * as React from 'react'

export function SortField({ label, hideOptionAll, defaultValue = 'All', optionList, onChange }) {
  const [value, setValue] = React.useState(defaultValue)

  function handleChange(e) {
    const value = e.target.value
    console.log(value)
    onChange?.(value)

    // if (e.target.value === '') {
    //   setValue(defaultValue)
    //   return
    // }
    setValue(value)
  }

  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        {!hideOptionAll && <MenuItem value={defaultValue}>{defaultValue}</MenuItem>}
        {optionList?.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
