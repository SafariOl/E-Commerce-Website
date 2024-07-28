import { Grid } from '@mui/material'
import React from 'react'
import {ProductModul} from './ProductModul'
import { IProduct } from '../interfaces/Product'

export default function ProductsModul(items: IProduct[] | null, gender: string) {
  return (
    <>
        <Grid container columnGap={5} justifyContent={'center'}>
            {items && items.map(item => 
                <ProductModul item={item} genderSelected={gender} />
            )}
        </Grid>
    </>
  )
}
