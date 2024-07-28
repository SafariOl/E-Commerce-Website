import { Box, Typography } from '@mui/material'
import CartItems from './CartItems'
import SummaryPrice from './SummaryPrice'
import React, { useEffect, useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { useRouter } from 'next/navigation'
import { getCustomerCart } from '@/app/lib/thunks/cartThunks'
import { refresh } from '@/app/lib/thunks/customerThunks'

export default function CartPageComponent() {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart.cart)
    const customer = useAppSelector(state => state.customer.customer)

    useLayoutEffect(() => {
        if(localStorage.getItem('token')){
            dispatch(refresh())
        }
    }, [])

    useEffect(() => {
        if(customer){
            dispatch(getCustomerCart(customer.customer.customer_id,))
        }
    }, [customer])
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
            flexWrap: 'wrap'
        }}>
            {cart && 
            <>
                {CartItems(cart)}
                {SummaryPrice(cart)}
            </>
            }
        </Box>
    </Box>
    </>
  )
}
