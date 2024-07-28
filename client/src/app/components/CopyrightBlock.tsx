'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import { payImages } from '../utils/lists';
import { copyrightBoxClass } from '../utils/classes';

export default function CopyrightBlock() {
  return (
    <Box sx={copyrightBoxClass}>
        <Typography variant='body1' fontSize={'14px'} sx={{opacity: .6}}>Shop.co © 2000-2023, All Rights Reserved</Typography>
        <Box sx={{display: 'flex', alignItems: 'center', gap: {md: '25px', xs: '10px'}}}>
            {payImages.map((img, idx) => 
                <Image key={idx} src={img} width={40} height={30} alt='payment-img'/>
            )}
        </Box>
    </Box>
  )
}
