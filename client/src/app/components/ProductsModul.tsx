import { Grid } from '@mui/material'
import React from 'react'
import {ProductModul} from './ProductModul'
import { IProduct } from '../interfaces/Product'

interface IProductsProps {
  items: IProduct[] | null
  gender: string
}

export default function ProductsModul({items, gender}:IProductsProps) {
  return (
    <>
        <Grid container columnGap={5} justifyContent={'center'}>
            {items && items.map(item =>
              <Grid sx={{p: '10px', mb: "36px", mx:2}} item xs={12} md={5} lg={4} xl={3} key={item.product_id}>
                <ProductModul item={item} genderSelected={gender} />
              </Grid> 
            )}
        </Grid>
    </>
  )
}
