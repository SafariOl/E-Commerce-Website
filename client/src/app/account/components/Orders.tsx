import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Orders() {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
       <Typography variant='body1' sx={{textAlign: 'center'}}>No orders yet...</Typography>
    </Box>
  )
}
