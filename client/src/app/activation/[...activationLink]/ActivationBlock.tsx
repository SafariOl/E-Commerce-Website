import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { Box, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { activate } from '@/app/lib/thunks/customerThunks'
import { directionColumnBlock } from '@/app/utils/classes'

export default function ActivationBlock(activationLink:any) {
    const dispatch = useAppDispatch()
    const customer = useAppSelector(state => state.customer.customer)
    const router = useRouter()

    useEffect(() => {
        if(customer && customer.customer.is_activated) router.push('/')
    }, [customer])

  return (
    <Box sx={{
        ...directionColumnBlock,
        gap: 3
    }}>
        <Typography variant='h2' fontSize={{md: '4em', xs: '2em'}}>Account Activation</Typography>
        <Button sx={{
            color: '#000',
            border: '1px solid #000',
            fontWeight: '700',
            px: {md: 12, xs: 8},
            '&:active': {
                bgcolor: '#777'
            },
            '&:hover': {
                bgcolor: '#b8b8b8'
            }
        }} onClick={() => dispatch(activate(activationLink.activationLink))}>Activate</Button>
    </Box>
  )
}
