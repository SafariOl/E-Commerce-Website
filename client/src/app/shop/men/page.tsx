'use client'
import { useState } from 'react'
import { Box } from '@mui/material'
import Filters from '../components/Filters';
import ShopItems from '../components/ShopItems';
import { shopMainBox } from '@/app/utils/classes';
import MobilePageHeaderField from '../components/MobilePageHeaderField';


export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <Box sx={shopMainBox}>
      <Filters isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
      <MobilePageHeaderField isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
      <ShopItems />
    </Box>
  )
}
