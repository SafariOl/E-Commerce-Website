'use client'
import { Box } from '@mui/material'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../lib/store'
import RegisterForm from './components/RegisterForm'

export default function RegisterPage() {
  return (
    <Provider store={store}>
        <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        bgcolor="#f5f5f5"
        >
            <RegisterForm />
        </Box>
    </Provider>
  )
}
