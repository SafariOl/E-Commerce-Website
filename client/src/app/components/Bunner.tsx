import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { brandsLogos } from '../utils/lists'

export default function Bunner() {
  return (
    <Box sx={{bgcolor: '#000', p: {md: '2.188em 4.688em', xs: '1em 2em'}, display: 'flex', justifyContent:{lg:'space-between', xs: 'center'}, flexShrink: 1, flexWrap: 'wrap', gap: 5}}>
        {brandsLogos.map((img, idx) => 
            <Box key={idx} sx={{maxWidth: {md:'207px', xs: '100px'}, display: 'grid', placeItems: 'center'}}>
                <Image src={img} style={{width: '100%', height: 'auto'}} quality={100} alt='brand-logo'/>
            </Box>
        )}
    </Box>
  )
}
