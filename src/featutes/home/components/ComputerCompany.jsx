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
        sx={{ mx: -1 }}
      >
        {Array.isArray(computerList) &&
          computerList.length > 0 &&
          computerList.map((item, idx) => (
            <Box
              sx={{
                width: 1 / (computerList.length / 2),
                p: 1,
              }}
              key={idx}
            >
              <Box boxShadow={1} sx={{ bgcolor: 'white', borderRadius: '4px', px: 2 }}>
                <Box sx={{ width: '100%', verticalAlign: 'middle' }} component="img" src={item} />
              </Box>
            </Box>
          ))}
      </Stack>
    </Container>
  )
}

export default ComputerCompany
