import { ILogin } from '@/app/interfaces/Customer'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { customerLogin } from '@/app/lib/thunks/customerThunks'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function LoginForm() {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const customer = useAppSelector(state => state.customer.customer)
    const router = useRouter()

    useEffect(() => {
        if(customer) {
            router.back()
        }
    }, [customer])

    const handleLogin = () => {
        if(!email || !password) return

        const customer:ILogin = {
            email: email,
            password: password
        }
        dispatch(customerLogin(customer))
    }

  return (
    <Box
        width={{ xs: '100%', sm: '400px' }}
        padding={3}
        bgcolor="#ffffff"
        boxShadow={2}
        borderRadius={2}
    >
        <Typography variant="h4" component="h1" gutterBottom>
            Login
        </Typography>
        <TextField onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField onChange={e => setPassword(e.target.value)} label="Password" variant="outlined" type="password" fullWidth margin="normal" />
        <Button onClick={handleLogin} variant="contained" color="primary" fullWidth>
            Login
        </Button>
        <Typography variant="body2" align="center" marginTop={2}>
            Already don't have an account? <a href="/register">Register</a>
        </Typography>
    </Box>
  )
}
