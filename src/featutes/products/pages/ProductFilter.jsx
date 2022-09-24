import { Box, Stack } from '@mui/material'
import React from 'react'
import { SearchBox } from '../../../components/formFields/Searchbox'
import { SortField } from '../../../components/formFields/SortField'

const optionList = [
  {
    label: 'Lower price',
    value: 'Lower price',
  },
  {
    label: 'Higher price',
    value: 'Higher price',
  },
  {
    label: 'Most popular',
    value: 'Most popular',
  },
]

ProductFilter.propTypes = {}

function ProductFilter(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Box>
        <SearchBox />
      </Box>

      <Box sx={{ width: { xs: 1 / 2, sm: 185 } }}>
        <SortField optionList={optionList} hideOptionAll defaultValue="Most popular" />
      </Box>
    </Stack>
  )
}

export default ProductFilter
