import { Box, Typography } from '@mui/material'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Count from './Count'
import theme from '@/app/theme'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import CheckCustomerModal from '@/app/components/CheckCustomerModal'
import SendToCartBtn from './SendToCartBtn'
import ItemDiscount from './ItemDiscount'
import ItemRating from './ItemRating'
import Size from './Sizes'
import { refresh } from '@/app/lib/thunks/customerThunks'
import { IProductInfo } from '@/app/utils/types'
import { sizes } from '@/app/utils/lists'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCookieCart } from '@/app/lib/slices/CartSlice'

export default function ProductInfo({product_id, name, rate, price, discount, description, color, main_img}:IProductInfo) {
    const [newPrice, setNewPrice] = useState<number | null>(null)
    const isOpen = useAppSelector(state => state.signModal.isOpen)
    const dispatch = useAppDispatch()
    const [count, setCount] = useState<number>(1)
    const size = useAppSelector(state => state.filter.sizeForCart)
    const notifySuccess = () => toast.success("Item was successfully added to you cart", {autoClose: 1000, transition: Slide})

    useLayoutEffect(() => {
        localStorage.getItem('token') && dispatch(refresh())
        discount && setNewPrice(price - (price * discount / 100))
    }, [])

    const handleClick = () => {
        if(!size || size.length > 1){ 
            const notifyError = () => toast.error("Size wasn't selected...", {autoClose: 1000, transition: Slide})
            return notifyError()
        }
        dispatch(addToCookieCart({product_id, item_name: name, main_img, count, size, price, color}))
        notifySuccess()
    }

  return (
    <>
        <ToastContainer 
            theme='colored'
            closeOnClick={false}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            transition={Slide}
        />
        <CheckCustomerModal isOpen={isOpen} />
        <Box sx={{display: 'flex', flexDirection: 'column', ml: 2, px: 2 }}>
            <Typography variant='h1' sx={{
                fontSize:{xs: '24px', md: '40px'}
            }}>{name}</Typography>
            <ItemRating rate={rate} />
            {discount && newPrice ? 
                <ItemDiscount price={price} newPrice={newPrice} discount={discount} />
                :
                <Typography variant='h3' sx={{fontSize: {md: 32, xs: 24}}}>${Number(price).toFixed(2)}</Typography>
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
