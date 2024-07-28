import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import theme from '@/app/theme';

interface IOptions {
    isFilterOpen: boolean
    setIsFilterOpen: (value: boolean) => void
}

export default function MobilePageHeaderField({ isFilterOpen, setIsFilterOpen}:IOptions) {
  return (
    <Box sx={{
        [theme.breakpoints.up('md')]: {display: 'none'},
        display: isFilterOpen ? 'none' : 'block',
    }}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
        }}>
            <Typography>Path</Typography>
            <Button sx={{ minWidth: 'fit-content', p: '5px' }}
                onClick={() => setIsFilterOpen(true)}
            >
                <TuneIcon sx={{color: '#000'}}/>
            </Button>
        </Box>
    </Box>
  )
}
