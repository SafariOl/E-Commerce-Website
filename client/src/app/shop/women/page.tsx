'use client'
import { useState } from 'react'
import { Box } from '@mui/material'
import MobilePageHeaderField from '../components/MobilePageHeaderField';
import Filters from '../components/Filters';
import ShopItems from '../components/ShopItems';
import { shopMainBox } from '@/app/utils/classes';
import BasicBreadcrumbs from '@/app/components/BreadCrumbs';
import { usePathname } from 'next/navigation';
import useBreadcrumbs from '@/app/hooks/useBreadcrumbs';

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const pathname = usePathname()
  const breadcrumbs = useBreadcrumbs({pathname, text: "Women"})

  return (
    <>
      <BasicBreadcrumbs links={breadcrumbs.links} text={breadcrumbs.text}/>
      <Box sx={shopMainBox}>
        <MobilePageHeaderField isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
        <Filters isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
        <ShopItems />
      </Box>
    </>
  )
}
