'use client'
import { Typography } from '@mui/material'
import React, { useEffect, useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { useRouter } from 'next/navigation'
import { refresh } from '../lib/thunks/customerThunks'

export default function ActivationPage() {
  const customer = useAppSelector(state => state.customer.customer)
  const router = useRouter()
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    if(localStorage.getItem('token')) dispatch(refresh())
  }, [])

  useEffect(() => {
    if(customer) router.push('/')
  },[customer])
  return (
    <Typography>Activation Link was sent <br/>Check your email please.</Typography>
  )
}
