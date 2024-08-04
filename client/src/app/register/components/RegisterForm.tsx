import { IRegister } from '@/app/interfaces/Customer'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { customerRegister } from '@/app/lib/thunks/customerThunks'
import { siteBtn } from '@/app/utils/classes'
import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import PasswordField from '../../components/PasswordField'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
    const dispatch = useAppDispatch()
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>("")
    const errors = useAppSelector(state => state.customer.errors)
    const customer = useAppSelector(state => state.customer.customer)
    const router = useRouter()
    
    const handleRegister = () => {
        if(!username || !email || !password) return setError("Enter all fields")
        else if(password.length < 8) return setError("Password length should be at list 8 symbols")
        const customer:IRegister = {
            user_name: username,
            email: email,
            password: password
        }
        dispatch(customerRegister(customer))
    }

    useEffect(() => {
        if(customer) router.push('/activation')
    }, [customer])

  return (
    <Box
        width={{ xs: '100%', sm: '400px' }}
        padding={3}
        bgcolor="#ffffff"
        boxShadow={2}
        borderRadius={2}
        position={'relative'}
    >
        <Typography variant="h4" component="h1" gutterBottom>Register</Typography>
        {(errors || error) && <Typography variant='body1' sx={{color:'red', position: 'absolute', top: 0}}>{errors || error}</Typography>}
        <TextField onChange={e => setUsername(e.target.value)} label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth margin="normal" />
        <PasswordField setPassword={setPassword}/>
        <Button sx={{...siteBtn, mt: '4vh'}} onClick={handleRegister} variant="contained" color="primary" fullWidth>
            Register
        </Button>
        <Typography variant="body2" align="center" marginTop={2}>
            Already have an account? <Link href="/login">Log in</Link>
        </Typography>
    </Box>
  )
}
