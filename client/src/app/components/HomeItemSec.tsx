import { useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { directionColumnBlock } from '../utils/classes';
import ProductsModul from './ProductsModul'
import { Box, Button, Link, Typography } from '@mui/material';
import { getSixProducts } from '../lib/thunks/shopThunks';
import { setOpen } from '../lib/slices/GenderSelectModalSlice';

interface IProp {
  slice: number[],
  title: string
}

export default function HomeItemSec({slice, title}:IProp) {
  const items = useAppSelector(state => state.shop.items)
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    dispatch(getSixProducts())
  }, [])

  return (
    <Box mt='72px' mb='64px' px={2} sx={directionColumnBlock}>
      <Typography variant='h1' mb={'55px'} 
        sx={{ fontSize: {md:48, xs: 32}, textAlign: 'center' }}>
          {title}
      </Typography>
      <ProductsModul items={items.slice(...slice)} gender="" />
      <Button onClick={() => dispatch(setOpen())} 
      sx={{
        textAlign: 'center', 
        fontWeight: 600, 
        fontSize: {md: 16, xs: 14},
        color: "#000",
        textTransform: 'capitalize',
        }}>View All</Button>
    </Box>
  )
}
