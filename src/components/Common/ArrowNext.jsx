import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

ArrowNext.propTypes = {
  onClick: PropTypes.func,
}

function ArrowNext({ onClick }) {
  return (
    <Button
      variant="contained"
      className="next"
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: 'calc(50% - 24px)',
        right: 16,
        zIndex: 1,

        display: 'none',
        minWidth: 0,
        width: 40,
        height: 40,
        '& span': {
          m: 0,
        },
      }}
      startIcon={<ArrowForwardIosIcon fontSize="large" />}
    />
  )
}

export default ArrowNext
