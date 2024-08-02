import React, { useLayoutEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import ImageBlock from './ImageBlock'
import ProductInfo from './ProductInfo'
import Reviews from './Reviews'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { getProduct, getReviews } from '@/app/lib/thunks/shopThunks'
import BasicBreadcrumbs from '@/app/components/BreadCrumbs'
import useBreadcrumbs from '@/app/hooks/useBreadcrumbs'
import { usePathname } from 'next/navigation'

export default function ProductComponent(prop: {productId:string[]}) {
    const dispatch = useAppDispatch()
    const item = useAppSelector(state => state.shop.item)
    const reviews = useAppSelector(state => state.shop.reviews)
    const loading = useAppSelector(state => state.shop.loading)
    const pathname = usePathname()
    let breadcrumbs

    if(item) {
      breadcrumbs = useBreadcrumbs({pathname})
    } 

    useLayoutEffect(() => { 
        dispatch(getProduct(prop.productId[1]))
        dispatch(getReviews(prop.productId[1]))
    }, [])

    return (
    <>
        {loading && <Typography variant='h1'>Loading...</Typography>}
        {item && breadcrumbs &&
        <>
          <BasicBreadcrumbs links={breadcrumbs.links} text={item.name}/>
          <Box>
            <Grid container mt={3} mb={7} maxHeight={'100%'}>
              <Grid item xs={12} lg={6}>
                <ImageBlock main_img={item.main_img} img1={item.img1} img2={item.img2} />
              </Grid>
              <Grid item xs={12} lg={6} maxWidth={'590px'}>
                <ProductInfo
                  product_id={prop.productId[1]}
                  main_img={item.main_img}
                  name={item.name} 
                  rate={item.rate} 
                  price={item.price} 
                  discount={item.discount} 
                  description={item.description} 
                  color={item.color}
                  reviews={item.reviews}
                />
              </Grid>
            </Grid>
            <Reviews product_id={prop.productId[1]} reviews={reviews}/>
          </Box>
        </>
        }
    </>
  )
}
