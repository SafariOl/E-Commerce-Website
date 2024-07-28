'use client'
import { useState } from 'react'
import { Box } from '@mui/material'
import { Provider } from "react-redux";
import { store } from '@/app/lib/store'
import MobilePageHeaderField from '../components/MobilePageHeaderField';
import Filters from '../components/Filters';
import ShopItems from '../components/ShopItems';
import { shopMainBox } from '@/app/utils/classes';

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  return (
    <Provider store={store}>
      <Box sx={shopMainBox}>
        <MobilePageHeaderField isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
        <Filters isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
        <ShopItems />
      </Box>
    </Provider>
  )
}
