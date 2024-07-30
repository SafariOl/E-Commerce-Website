'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import PaginationComponent from './PaginationComponent'
import { useAppSelector } from '@/app/lib/hooks'


export default function ShopItems() {    
    const loading = useAppSelector(state => state.shop.loading)

    return (
        <>
            {loading && <Typography variant='h1'>Loading...</Typography>}
            <Box sx={{
                width: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                margin: '2em auto 0'
            }}>
                <PaginationComponent/>
            </Box>
        </>
    )
}
