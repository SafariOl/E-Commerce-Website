'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import PaginationComponent from './PaginationComponent'
import { useAppSelector } from '@/app/lib/hooks'
import BasicBreadcrumbs from '@/app/components/BreadCrumbs'
import { usePathname } from 'next/navigation'
import useBreadcrumbs from '@/app/hooks/useBreadcrumbs';
import MobilePageHeaderField from './MobilePageHeaderField'

export default function ShopItems({isFilterOpen, setIsFilterOpen} :{isFilterOpen: boolean, setIsFilterOpen: (val: boolean) => void}) {    
    const loading = useAppSelector(state => state.shop.loading)
    const pathname = usePathname()
    let textName = pathname.split("/")
    let convertedText = textName[textName.length - 1].charAt(0).toUpperCase() + textName[textName.length - 1].slice(1)
    const breadcrumbs = useBreadcrumbs({pathname})
    return (
        <>
            {loading && <Typography variant='h1'>Loading...</Typography>}
            <Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '1em'}}>
                    <BasicBreadcrumbs links={breadcrumbs.links} text={convertedText}/>
                    <MobilePageHeaderField isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
                </Box>
                <Box sx={{
                    width: 'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    margin: '1em auto 0'
                }}>
                    <PaginationComponent/>
                </Box>
            </Box>
        </>
    )
}
