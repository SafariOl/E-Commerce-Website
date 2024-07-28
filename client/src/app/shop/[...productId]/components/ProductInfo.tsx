import { Box, Typography } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Count from './Count'
import theme from '@/app/theme'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import CheckCustomerModal from '@/app/components/CheckCustomerModal'
import SendToCartBtn from './SendToCartBtn'
import ItemDiscount from './ItemDiscount'
import ItemRating from './ItemRating'
import Size from './Sizes'
import { refresh } from '@/app/lib/thunks/customerThunks'
import { openModal } from '@/app/lib/slices/CheckCustomerSlice'
import { addToCart } from '@/app/lib/thunks/cartThunks'
import { IProductInfo } from '@/app/utils/types'
import { sizes } from '@/app/utils/lists'

export default function ProductInfo({product_id, name, rate, price, discount, description, color}:IProductInfo) {
    const [newPrice, setNewPrice] = useState<number | null>(null)
    const isOpen = useAppSelector(state => state.signModal.isOpen)
    const dispatch = useAppDispatch()
    const customer = useAppSelector(state => state.customer.customer)
    const [count, setCount] = useState<number>(1)
    const size = useAppSelector(state => state.filter.sizeForCart)

    useLayoutEffect(() => {
        if(localStorage.getItem('token')){
            dispatch(refresh())
        }
        if(discount){
            setNewPrice(price - (price * discount / 100))
        }
    }, [])

    const handleClick = () => {
        if(!customer){
            dispatch(openModal())
        }else if(!size || size.length > 1) {
            return console.log("Choose one size of item")
        }
        else {
            dispatch(addToCart({
                customer_id: customer.customer.customer_id, 
                product_id: product_id,
                count: count,
                size: size
            }))
        }
    }

  return (
    <>
        <CheckCustomerModal isOpen={isOpen}/>
        <Box sx={{display: 'flex', flexDirection: 'column', ml: 2, px: 2 }}>
            <Typography variant='h1' sx={{
                fontSize:{xs: '24px', md: '40px'}
            }}>{name}</Typography>
            <ItemRating rate={rate} />
            {discount && newPrice ? 
                <ItemDiscount price={price} newPrice={newPrice} discount={discount} />
                :
                <Typography variant='h3' sx={{fontSize: {md: 32, xs: 24}}}>${price}</Typography>
            }
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '45px'}}>
                <Typography variant='body1' mt={'18px'}>{description}</Typography>
                <div>
                    <Typography sx={{mb: '15px'}} variant='body1'>Colors</Typography>
                    <Box sx={{bgcolor: color, width: 37, height: 37, borderRadius: '50%', border: '1px solid #000'}}></Box>
                </div>
                <div>
                    <Typography sx={{mb: '15px'}} variant='body1'>Choose Size</Typography>
                    <Size sizes={sizes}/>
                </div>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px',
                    [theme.breakpoints.down('sm')]: { 
                        flexWrap: 'wrap',
                        gap: '15px',
                        justifyContent: 'center'
                    }
                }}>
                    <Count count={count} setCount={setCount}/>
                    <SendToCartBtn handleClick={handleClick}/>
                </Box>
            </Box>
        </Box>
    </>
  )
}
