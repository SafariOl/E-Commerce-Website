import { justifyCenterBlock, sendCartBtnStyle } from '@/app/utils/classes'
import { Button, Typography } from '@mui/material'
import React from 'react'

interface ISendBtn {
    handleClick: () => void
}

export default function SendToCartBtn({handleClick}:ISendBtn) {
  return (
    <Button onClick={handleClick} sx={{...justifyCenterBlock, ...sendCartBtnStyle}}>
        <Typography variant='h4' fontSize={{md: '16px', xs: '14px'}}>Add to Cart</Typography>
    </Button>
  )
}
