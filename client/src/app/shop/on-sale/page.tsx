'use client'
import React, { useState } from 'react'
import { shopMainBox } from '../../utils/classes'
import { Box } from '@mui/material'
import Filters from '../components/Filters'
import ShopItems from '../components/ShopItems'
import MobilePageHeaderField from '../components/MobilePageHeaderField'

export default function OnSaleProductsPage() {
const [isFilterOpen, setIsFilterOpen] = useState(false)
  return (
    <Box sx={shopMainBox}>
      <Filters isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
      <MobilePageHeaderField isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
      <ShopItems />
    </Box>
  )
}
