'use client'
import React, { useState } from 'react'
import { shopMainBox } from '../../utils/classes'
import { Box } from '@mui/material'
import Filters from '../components/Filters'
import ShopItems from '../components/ShopItems'

export default function OnSaleProductsPage() {
const [isFilterOpen, setIsFilterOpen] = useState(false)
  return (
    <Box sx={shopMainBox}>
      <Filters isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} category='O'/>
      <ShopItems isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
    </Box>
  )
}
