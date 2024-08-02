'use client'
import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Link, Typography } from '@mui/material'
import Image from 'next/image'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Count from '@/app/shop/[...productId]/components/Count'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { ICart } from '@/app/interfaces/Cart';
import { siteBtn } from '@/app/utils/classes';
import { changeCountOfItem, removeFromCookieCart } from '@/app/lib/slices/CartSlice';

export default function CartItem({product_id, item_name, price, color, count, main_img, size, gender}:ICart) {
    const [newCount, setCount] = useState<number>(count)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        newCount !== count && setIsOpen(true)
    }, [newCount])

    const handleClick = () => {
        dispatch(removeFromCookieCart({product_id: product_id}))
    }

    const handleSave = () => {
        dispatch(changeCountOfItem({product_id, count: newCount}))
        setIsOpen(false)
    }

    const handleCancel = () => {
        setCount(count)
        setIsOpen(false)
    }

  return (
    <>
    <Box key={product_id} sx={{
        my: '24px',
        display: 'flex',
        width: "100%",
    }}>
        <Box sx={{
            width: {md: 124, xs: 100},
            height: {md: 124, xs: 100},
            overflow: 'hidden',
            position: 'relative',
            mr: '5px'
        }}>
            <Image src={`data:image/jpeg;base64,${main_img}`} width={0} height={0} 
            style={{width:'100%', height: '100%', top: 0, left: 0, objectFit: 'cover', position: 'absolute', objectPosition: 'top center'}} 
            quality={100}
            alt='img'/>
        </Box>
        <Box sx={{
            width: "100%",
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Box sx={{width: 'fit-content'}}>
                <Link href={`/shop/${gender === 'M' ? 'men' : 'women'}/${product_id}`} variant='h4' fontWeight={700} fontSize={{md: 20, xs: 16}} sx={{
                    color: '#000',
                    textDecoration: 'none',}}
                >
                    {item_name}
                </Link>
                <Typography variant='body1' fontSize={{md: 14, xs: 12}}>Size: <span>{size}</span></Typography>
                <Typography variant='body1' fontSize={{md: 14, xs: 12}} mb={'20px'}>Color: <span>{color}</span></Typography>
                <Typography variant='h4' fontWeight={700} fontSize={{md: 24, xs: 20}}>${(newCount*price).toFixed(2)}</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'end'
            }}>
                {isOpen ? 
                <Box sx={{display: 'flex', gap:'10px'}}>
                    <Button onClick={handleCancel} 
                    sx={{
                        ...siteBtn,
                        bgcolor: 'transparent', 
                        border: '1px solid #000',
                        color: '#000',
                        '&:hover':{
                            bgcolor:'transparent'
                        }
                    }}>Cancel</Button>
                    <Button onClick={handleSave} sx={siteBtn}>Save</Button> 
                </Box>
                :
                <IconButton onClick={handleClick} sx={{p: 0}}>
                    <DeleteOutlineIcon sx={{color: 'red'}} />
                </IconButton>
                }
                <Count count={newCount} setCount={setCount}/>
            </Box>
        </Box>
    </Box>
    </>
  )
}
