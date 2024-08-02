'use client'
import { Box } from '@mui/material'
import React from 'react'
import RegisterForm from './components/RegisterForm'
import { formBox } from '../utils/classes'

export default function RegisterPage() {
  return <Box sx={formBox}><RegisterForm /></Box>
}
