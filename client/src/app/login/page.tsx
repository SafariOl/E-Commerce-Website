'use client'
import { Box } from '@mui/material'
import React from 'react'
import LoginForm from './components/LoginForm'
import { formBox } from '../utils/classes'

export default function RegisterPage() {
  return <Box sx={formBox}><LoginForm /></Box>
}
