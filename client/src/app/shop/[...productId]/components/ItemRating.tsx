import { Box, Rating, Typography } from '@mui/material'
import React from 'react'

interface IRatingProp {
    rate: number
}

export default function ItemRating({rate}:IRatingProp) {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', mb: '8px', my: {md: '14px', xs: '10px'}}}>
        <Rating readOnly size='medium' value={rate}/>
        <Typography variant='body1' sx={{fontSize: {md: 16, xs: 14}}}>{rate} / 5</Typography>
    </Box>
  )
}
