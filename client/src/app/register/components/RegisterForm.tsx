import { IRegister } from '@/app/interfaces/Customer'
import { useAppDispatch } from '@/app/lib/hooks'
import { customerRegister } from '@/app/lib/thunks/customerThunks'
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function RegisterForm() {
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const handleRegister = () => {
        if(!username || !email || !password) return

        const customer:IRegister = {
            user_name: username,
            email: email,
            password: password
        }
        dispatch(customerRegister(customer))
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
            Register
        </Typography>
        <TextField onChange={e => setUsername(e.target.value)} label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField onChange={e => setPassword(e.target.value)} label="Password" variant="outlined" type="password" fullWidth margin="normal" />
        <Button href='/activation' onClick={handleRegister} variant="contained" color="primary" fullWidth>
            Register
        </Button>
        <Typography variant="body2" align="center" marginTop={2}>
            Already have an account? <a href="/login">Log in</a>
        </Typography>
    </Box>
  )
}
