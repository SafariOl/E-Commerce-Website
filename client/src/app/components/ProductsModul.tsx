import { Box, Grid } from '@mui/material'
import React from 'react'
import {ProductModul} from './ProductModul'
import { IProduct } from '../interfaces/Product'
import { productModulBox } from '../utils/classes'
import { display, width } from '@mui/system'

interface IProductsProps {
  items: IProduct[] | null
  category: string
}

const container = {
  display: 'flex',
  justifyContent: {md: 'flex-start', xs: 'center'},
  flexWrap: 'wrap',
  mx: {md:2, xs: 1},
  width: '100%',
}

export default function ProductsModul({items, category}:IProductsProps) {
  return (
    <Box sx={container}>
        {items && items.map(item =>
          <Box  sx={{...productModulBox, p: '15px 5px', mx: '15px', mb: "36px"}} key={item.product_id}>
            <ProductModul item={item} categorySelected={category} />
          </Box> 
        )}
    </Box>
  )
}
