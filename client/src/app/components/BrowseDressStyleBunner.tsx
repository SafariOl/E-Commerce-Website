import { Box, Grid, Typography } from '@mui/material'
import * as React from 'react'
import Image from 'next/image'
import { directionColumnBlock, dressStyleBunnerLink } from '../utils/classes'
import { styles } from '../utils/lists'

const ItemText = {
    color: '#000',
    position: 'absolute', 
    top: 30, 
    left: 30, 
    zIndex: 111,
    fontSize: {md: 36, xs: 24}
}

export default function BrowseDressStyleBunner() {
  return (
    <Box mt={'72px'} mb={'64px'} px={2} sx={{...directionColumnBlock, bgcolor: '#f0f0f0'}}>
        <Typography variant='h1' mb={'55px'} sx={{
            fontSize: {md:48, xs: 32},
            textAlign: 'center'
        }}>
            BROWSE BY dress STYLE
        </Typography>
        
        <Grid container spacing={2} sx={{ width: '70vw', margin: '0 auto', }}>
            {styles.map((style, idx) => 
                <Grid key={idx} item xs={12} md={idx % 2 == 0 ? 4 : 8}>
                    <Box sx={dressStyleBunnerLink}>
                        <Image src={style.src} width={0} height={0} alt="style" />
                        <Typography variant="h4" sx={ItemText}>
                            {style.styleName}
                        </Typography>
                    </Box>
                </Grid>
            )}
        </Grid>
    </Box>
  )
}
