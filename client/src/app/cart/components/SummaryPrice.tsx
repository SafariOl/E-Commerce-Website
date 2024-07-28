import { Box, Button, InputBase, Typography } from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EastIcon from '@mui/icons-material/East';
import { ICart } from '@/app/interfaces/Cart';

const priceBox = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

export default function SummaryPrice(cartItems:ICart[]) {
    const deliveryFee = 15
    let subTotal = 0
    cartItems.map(el => {subTotal += (Number(el.price) * el.count)})
    const summaryItems = [
        {
            title: "Subtotal",
            price: subTotal.toFixed(2)
        },
        {
            title: "Discount",
            price: 0
        },
        {
            title: "Delivery Fee",
            price: deliveryFee
        }
    ]
  return (
    <Box sx={{
        width: '100%', 
        maxWidth: {lg: '505px'}, 
        my: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        px: 2
    }}>
        <Typography variant='h4' fontSize={{md: 24, xs: 20}} fontWeight={700}>Order Summary</Typography>
        <div>
            {summaryItems.map(item => 
                <Box mb={'20px'} key={item.title} sx={priceBox} >
                    <Typography variant='body1' sx={{fontSize: {md: 20, xs: 16}, opacity: .6}}>{item.title}</Typography>
                    <Typography variant='h4' sx={{
                        fontSize:{md: 20, xs: 16}, 
                        flexWeight: 700
                    }}>
                        ${item.price}
                    </Typography>
                </Box>
            )}
            <Box mt={'40px'} sx={priceBox} >
                <Typography variant='body1' sx={{fontSize: {md: 20, xs: 16}}}>Total</Typography>
                <Typography variant='h4' sx={{
                    fontSize:{md: 20, xs: 16}, 
                    flexWeight: 700
                }}>
                    ${(subTotal + deliveryFee).toFixed(2)}
                </Typography>
            </Box>
        </div>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <LocalOfferIcon sx={{opacity: .6}}/>
                <InputBase sx={{py: '10px', px: '15px'}} type='text' placeholder='Add promo code'/>
            </Box>
            <Button sx={{
                width: {md: '119px', xs: '88px'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#000',
                color: '#fff',
                borderRadius: '20px',
                py: '10px',
                '&:hover': {
                    bgcolor: '#777'
                }
            }}><Typography variant='h4'  fontSize={{md: 16, xs: 14}}>Apply</Typography></Button>
        </Box>
        <Button sx={{
            width: '100%',
            bgcolor: '#000',
            color: '#fff',
            display: 'flex',
            gap: '12px',
            py: '16px',
            borderRadius: '20px',
            '&:hover': {
                bgcolor: '#777'
            }
        }}>
            <Typography variant='body1' sx={{textTransform: 'capitalize', fontSize: {md: '16px', xs: '14px'}}}>Go To Checkout</Typography>
            <EastIcon />
        </Button>
    </Box>
  )
}
