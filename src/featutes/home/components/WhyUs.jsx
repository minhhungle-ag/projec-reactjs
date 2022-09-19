import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { whyUsList } from '../../../constants/whyUs'

WhyUs.propTypes = {}

function WhyUs(props) {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        sx={{ mx: -1 }}
      >
        {whyUsList.map((item, idx) => (
          <Box sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 4 }, p: 1 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1.5}
              key={idx}
              sx={{ p: 2 }}
              boxShadow={1}
            >
              {item.icon}
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.subtitle}</Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Container>
  )
}

export default WhyUs
