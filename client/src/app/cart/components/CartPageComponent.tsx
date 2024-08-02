'use client'
import { Box, Typography } from '@mui/material'
import CartItems from './CartItems'
import SummaryPrice from './SummaryPrice'
import React, { useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { refresh } from '@/app/lib/thunks/customerThunks'

export default function CartPageComponent() {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart.cart)

    useLayoutEffect(() => {
        if(localStorage.getItem('token')) dispatch(refresh())
    }, [])

  return (
    <>
    <Box px={2}>
        <Typography variant='h1' sx={{
            fontSize: {md: 40, xs: 32}
        }}>
            Your Cart
        </Typography>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '3em',
            position: 'relative',
            flexWrap: 'wrap'
        }}>
            {cart && 
            <>
            <CartItems cart={cart}/>
            <SummaryPrice cart={cart}/>
            </>
            }
        </Box>
    </Box>
    </>
  )
}
