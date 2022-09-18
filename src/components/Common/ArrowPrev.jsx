import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

ArrowPrev.propTypes = {
  onClick: PropTypes.func,
}

function ArrowPrev({ onClick }) {
  return (
    <Button
      variant="contained"
      className="prev"
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: 'calc(50% - 24px)',
        left: 16,
        zIndex: 1,

        display: 'none',
        minWidth: 0,
        width: 40,
        height: 40,
        '& span': {
          m: 0,
        },
      }}
      startIcon={<ArrowBackIosNewIcon fontSize="large" />}
    />
  )
}

export default ArrowPrev
