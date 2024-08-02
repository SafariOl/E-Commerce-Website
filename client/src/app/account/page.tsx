'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { logout, refresh } from '../lib/thunks/customerThunks'
import { Box, Button, Grid, Typography } from '@mui/material'
import Account from './components/Account'
import Orders from './components/Orders'
import { getAddress } from '../lib/thunks/addressThunk'
import { useRouter } from 'next/navigation'
import { directionColumnBlock } from '../utils/classes'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IoShirt } from "react-icons/io5";
import LogoutIcon from '@mui/icons-material/Logout';
import CheckCustomerModal from '../components/CheckCustomerModal'

const accountPageTitle = {
    color: '#000',
    textTransform:'capitalize',
    fontSize: {md: '1.3em', xs: '1em'}
}

export default function AccountPage() {
    const [currPage, setCurrPage] = useState(0)
    const dispatch = useAppDispatch()
    const customer = useAppSelector(state => state.customer.customer)
    const router = useRouter()

    const handleLogout = () => {
        router.push('/login')
        dispatch(logout())
    }

    useLayoutEffect(() => {
        if(localStorage.getItem('token')) dispatch(refresh())
    }, [])

    useEffect(() => {
        if(customer !== null){
            dispatch(getAddress(customer.customer.customer_id))
        }
    }, [customer])

  return (
    <>
    <Grid container spacing={2} my={'2em'} position={'relative'}>
        <Grid item xs={12} md={2} sx={{borderRight: '1px solid #262626'}}>
            <Box sx={{...directionColumnBlock, alignItems: 'start', gap: '.5em', position: {md: 'sticky'}, top: {md:'5%'}}}>
                <Button onClick={() => setCurrPage(0)}><AccountCircleIcon sx={{mr: '.8em', color: '#262626'}}/><Typography variant='h4' sx={accountPageTitle}>My Account</Typography></Button>
                <Button onClick={() => setCurrPage(1)}><IoShirt style={{marginRight:'.8em', fontSize: '1.7em', color: '#262626'}}/><Typography variant='h4' sx={accountPageTitle}>Orders</Typography></Button>
                <Button onClick={handleLogout}><LogoutIcon sx={{mr: '.8em', color: '#262626'}}/><Typography variant='h4' sx={{...accountPageTitle, color: 'red'}}>Logout</Typography></Button>
            </Box>
        </Grid>
        <Grid item xs={12} md={10}>
            {currPage == 0 ? <Account /> : <Orders />}
        </Grid>
    </Grid>
    </>
  )
}
