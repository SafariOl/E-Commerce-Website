import { Box, Button } from '@mui/material'
import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import theme from '@/app/theme';

export default function MobilePageHeaderField({ isFilterOpen, setIsFilterOpen} :
    {isFilterOpen: boolean, setIsFilterOpen: (value: boolean) => void}) {
  return (
    <Box sx={{[theme.breakpoints.up('lg')]: {display: 'none'}, display: isFilterOpen ? 'none' : 'block'}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Button sx={{ minWidth: 'fit-content', p: '5px' }} onClick={() => setIsFilterOpen(true)}>
                <TuneIcon sx={{color: '#000'}}/>
            </Button>
        </Box>
    </Box>
  )
}
