import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import { computerList } from '../../../constants/common'

ComputerCompany.propTypes = {}

function ComputerCompany(props) {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        sx={{ mx: -2 }}
      >
        {Array.isArray(computerList) &&
          computerList.length > 0 &&
          computerList.map((item, idx) => (
            <Box
              sx={{
                width: { xs: 1 / (computerList.length / 2), md: 1 / computerList.length },
                p: 2,
              }}
              key={idx}
            >
              <Box boxShadow={1} sx={{ bgcolor: 'white' }}>
                <Box sx={{ width: '100%' }} component="img" src={item} />
              </Box>
            </Box>
          ))}
      </Stack>
    </Container>
  )
}

export default ComputerCompany
