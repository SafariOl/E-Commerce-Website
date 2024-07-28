import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const btnClass = {
    color: '#000',
    minWidth: 'fit-content'
}

interface IProp {
    count: number
    setCount: (value:number) => void
}

export default function Count({count, setCount}:IProp) {


    return (
    <Box sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>
        <Button sx={btnClass} onClick={() => {count > 1 && setCount(count - 1)}}>
            <RemoveIcon />
        </Button>
        <Typography variant='h3'fontSize={{md: '16px', xs: '14px'}}>{count}</Typography>
        <Button sx={btnClass} onClick={() => setCount(count + 1)}>
            <AddIcon />
        </Button>
    </Box>
  )
}
