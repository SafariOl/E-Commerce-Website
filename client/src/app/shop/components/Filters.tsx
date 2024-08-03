'use client'
import { Box, Button, Typography } from '@mui/material'
import { useLayoutEffect } from 'react'
import theme from '@/app/theme';
import FilterAccordion from './FilterAccordion';
import FilterItems from './FilterItems';
import CloseIcon from '@mui/icons-material/Close';
import TuneIcon from '@mui/icons-material/Tune';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { usePathname } from 'next/navigation';
import { clearFilter, setGender } from '@/app/lib/slices/FilterSlice';
import { getFilteredItems, getProducts } from '@/app/lib/thunks/shopThunks';
import { filtersMainBox } from '@/app/utils/classes';

const applyBtn = {
  bgcolor: '#000',
  width: '100%', 
  color: '#fff',
  transition: 'all .15s ease-in-out',
  '&:hover': {
    bgcolor: '#3a3a3a'
  }
}
const clearBtn = {
  bgcolor: 'transparent', 
  color: '#000', 
  border: '1px solid #000', 
  width: '100%', 
  mb: '1em'
}

export default function Filters({isFilterOpen, setIsFilterOpen, category}:{
  isFilterOpen: boolean | false, setIsFilterOpen: (value: boolean) => void, category: string
}) {
  const dispatch = useAppDispatch()
  const filter = useAppSelector(state => state.filter)
  const pathname = usePathname()

  useLayoutEffect(() => { dispatch(setGender(pathname.slice(6, pathname.length).split('')[0].toUpperCase())) }, [])

  const handleCancel = () => {
    dispatch(clearFilter())
    location.reload()
  }

  const handleClick = () => {
    dispatch(getFilteredItems(filter))
    setIsFilterOpen(false)
  }

  return (
    <Box sx={{...filtersMainBox, mb: 5,
      [theme.breakpoints.down('lg')]:{ display: isFilterOpen ? 'block' : 'none'},
    }}>
      <div>
        <Box display={'flex'} justifyContent={'space-between'} mb={'36px'}>
          <Typography variant='h3' fontSize={20} textTransform={'capitalize'}>Filters</Typography>
          <TuneIcon sx={{
            [theme.breakpoints.down('lg')]: { display: 'none'},
            rotate: '90deg', color: '#9a9a9a'
          }}/>
          <Button sx={{[theme.breakpoints.up('lg')] : {display: 'none'}}}
           onClick={() => setIsFilterOpen(false)}>
            <CloseIcon sx={{color: '#000'}}/>
          </Button>
        </Box>
        <FilterItems />
        <FilterAccordion />
      </div>
      <div>
        {(filter.category.length || filter.color.length || filter.size.length || filter.style.length ) ? 
        <Button onClick={handleCancel} sx={clearBtn}>Clear All</Button> : null}
        <Button onClick={handleClick} sx={applyBtn}>Apply Filter</Button>
      </div>
    </Box>
  )
}
