import React, { FC, useEffect } from 'react'
import { Box, Grid, Link, Rating, Typography } from '@mui/material'
import Image from 'next/image'
import { IProduct } from '../interfaces/Product'
import { productModulBox, productModulItemName, productModulLink } from '../utils/classes'

interface IProp {
    item: IProduct
    genderSelected: string
}

export const ProductModul:FC<IProp> = ({item, genderSelected}) => {
    const {name, product_id, discount, main_img, rate, gender } = item
    let {price} = item
    price = Math.ceil(price)

  return (
    <Grid sx={{p: '10px', mb: "36px", mx:2}} key={product_id} item xs={12} md={5} lg={4} xl={3}>
        <Box sx={productModulBox}>
            <Link sx={productModulLink} 
                href={`/shop/${genderSelected ? genderSelected : (gender == 'M') ? 'men' : 'women'}/${product_id}`}
                >
                <Box maxHeight={'298px'} width={'100%'} overflow={'hidden'}>
                    <Image quality={100} 
                    src={ `data:image/jpeg;base64,${main_img}`} 
                    width={100}
                    height={100} 
                    style={{width:'100%', height: 'auto'}} 
                    alt='product-img' loading='lazy'/>
                </Box>
                <Box p={1} overflow={'hidden'}>
                    <Box component={'div'} mb={'8px'} sx={productModulItemName}>{name}</Box>
                    {rate ? 
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '10px', mb: '8px'}}>
                        <Rating readOnly size='small' value={rate}/>
                        <Typography variant='body1' sx={{fontSize: {md: 14, xs: 12}}}>{rate} / 5</Typography>
                    </Box> 
                    : 
                    <Rating name='no-value' readOnly size='small' sx={{mb:'8px'}} value={null}/>}
                    {discount ? 
                    <Box sx={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                        <Typography variant='h3' sx={{fontSize: {md: 24, xs: 20}}}>
                        ${Math.ceil(price - (price * discount / 100))} <span style={{textDecoration: 'line-through', opacity: .4}}>${price}</span></Typography>
                        <Typography sx={{display: 'inline-block', color: '#ff3333', fontSize: {md: 12, xs: 10}}}>-{discount}%</Typography>
                    </Box>
                    :
                    <Typography variant='h3' sx={{fontSize: {md: 24, xs: 20}}}>${price}</Typography>
                    }
                </Box>
            </Link>
        </Box>
    </Grid>
  )
}
