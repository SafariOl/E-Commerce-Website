import PasswordField from '@/app/components/PasswordField'
import { ILogin } from '@/app/interfaces/Customer'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { customerLogin } from '@/app/lib/thunks/customerThunks'
import { siteBtn } from '@/app/utils/classes'
import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function LoginForm() {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const customer = useAppSelector(state => state.customer.customer)
    const router = useRouter()
    const [error, setError] = useState<string>("")
    const errors = useAppSelector(state => state.customer.errors)

    useEffect(() => {
        customer && router.back()
    }, [customer])

    const handleLogin = () => {
        if(!email || !password) {
            setTimeout(() => {setError("")}, 3000)
            return setError("Something went wrong")
        }

        dispatch(customerLogin({email, password}))
    }

  return (
    <Box
        width={{ xs: '100%', sm: '400px' }}
        padding={3}
        bgcolor="#ffffff"
        boxShadow={2}
        borderRadius={2}
        position={'relative'}
        >
        <Typography variant="h4" component="h1" gutterBottom> Login </Typography>
        {(errors || error) && <Typography variant='body1' sx={{color:'red', position: 'absolute', top: 0}}>{errors || error}</Typography>}
        <TextField onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth margin="normal" />
        <PasswordField setPassword={setPassword}/>
        <Button onClick={handleLogin} sx={{...siteBtn, mt: '4vh'}} variant="contained" color="primary" fullWidth>
            Login
        </Button>
        <Typography variant="body2" align="center" marginTop={2}>
            Already don't have an account? <Link href="/register">Register</Link>
        </Typography>
    </Box>
  )
}
