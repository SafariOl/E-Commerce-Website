import { Box, Typography } from '@mui/material'
import React from 'react'

interface IDiscountProp {
    price: number,
    discount: number,
    newPrice: number
}

export default function ItemDiscount({price, discount, newPrice}: IDiscountProp) {
  return (
    <Box sx={{display: 'flex', gap: '15px', alignItems: 'center'}}>
        <Typography variant='h3' sx={{fontSize: {md: 32, xs: 24}}}>
        ${newPrice?.toFixed(1)} <span style={{textDecoration: 'line-through', opacity: .4}}>${price}</span></Typography>
        <Typography sx={{display: 'inline-block', color: '#ff3333', fontSize: {md: 16, xs: 14}}}>-{discount}%</Typography>
    </Box>
  )
}
