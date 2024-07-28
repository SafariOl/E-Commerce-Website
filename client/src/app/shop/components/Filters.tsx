'use client'
import { Box, Button, Typography } from '@mui/material'
import * as React from 'react'
import theme from '@/app/theme';
import FilterAccordion from './FilterAccordion';
import FilterItems from './FilterItems';
import CloseIcon from '@mui/icons-material/Close';
import TuneIcon from '@mui/icons-material/Tune';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { usePathname } from 'next/navigation';
import { setGender } from '@/app/lib/slices/FilterSlice';
import { getFilteredItems } from '@/app/lib/thunks/shopThunks';
import { filtersMainBox } from '@/app/utils/classes';

const btnClass = {
  bgcolor: '#000',
  width: '100%', 
  color: '#fff',
  transition: 'all .15s ease-in-out',
  '&:hover': {
    bgcolor: '#3a3a3a'
  },
  mb: 5
}

interface IProp {
  isFilterOpen: boolean | false
  setIsFilterOpen: (value: boolean) => void
}

export default function Filters({isFilterOpen, setIsFilterOpen}:IProp) {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(state => state.filter)
  const pathname = usePathname()

  React.useLayoutEffect(() => {
    dispatch(setGender(pathname.slice(6, pathname.length).split('')[0].toUpperCase()))
  }, [])

  const handleClick = () => {
    dispatch(getFilteredItems(filter))
    setIsFilterOpen(false)
  }

  return (
    <Box sx={{
      ...filtersMainBox,
      [theme.breakpoints.down('md')]:{ display: isFilterOpen ? 'block' : 'none'},
    }}>
      <div>
        <Box display={'flex'} justifyContent={'space-between'} mb={'36px'}>
          <Typography variant='h3' fontSize={20} textTransform={'capitalize'}>Filters</Typography>
          <TuneIcon sx={{
            [theme.breakpoints.down('md')]: { display: 'none'},
            rotate: '90deg',
            color: '#9a9a9a'
          }}/>
          <Button sx={{[theme.breakpoints.up('md')] : {display: 'none'}}}
           onClick={() => setIsFilterOpen(false)}>
            <CloseIcon sx={{
              color: '#000'
            }} />
          </Button>
        </Box>
        <FilterItems />
        <FilterAccordion />
      </div>
      <Button onClick={handleClick} sx={btnClass}>Apply Filter</Button>
    </Box>
  )
}
