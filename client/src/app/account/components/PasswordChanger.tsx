import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { changePassword } from '@/app/lib/thunks/customerThunks'
import { passBtns } from '@/app/utils/classes'
import { Box, Button, InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'

const passChangeInput = {
    display: 'block', 
    mt: '.5em', 
    border: '1px solid #a6a6a6', 
    maxWidth: '300px', 
    width: '100%',
    px: '15px'
}

export default function PasswordChanger({setIsPassword} : {setIsPassword: (value: boolean) => void}) {
    const customer = useAppSelector(state => state.customer.customer)
    const dispatch = useAppDispatch()
    const [newPassword, setNewPassword] = useState("")
    const [repeatedPassword, setRepeatedPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleCancel = () => {
        setError("")
        setNewPassword("")
        setRepeatedPassword("")
        setIsPassword(false)
    }

    const handleSumbit = () => {
        if(newPassword !== repeatedPassword || 
            !newPassword || !repeatedPassword || 
            newPassword.length < 8 || repeatedPassword.length < 8 ||
            !(/[A-Z]/.test(newPassword)) || !(/[A-Z]/.test(repeatedPassword))
        ) return setError("Something went wrong!")
        if(customer) {
            setError("")
            setTimeout(() => {
                setSuccess("Password has been changed!")
                handleCancel()
            }, 500)
            setTimeout(() => {
                handleCancel()
            }, 500)
            dispatch(changePassword({customer_id: customer?.customer.customer_id, password: newPassword}))
        }
    }
  return (
    <Box>
        {error.length > 0 && <Typography variant='body1' color={'red'}>{error}</Typography>}
        {success.length > 0 && <Typography variant='body1' color={'#1f9145'}>{success}</Typography>}
        <label htmlFor='pass'>New password*</label>
        <InputBase onChange={e => setNewPassword(e.target.value)} value={newPassword} id='pass' sx={passChangeInput} type='text' />
        <Typography variant='body1' sx={{fontSize: '.8em', opacity: .8, mb: 2}}>minimum 8 characters, including one capital letter </Typography>
        <label htmlFor='pass-rep'>Repeat password*</label>
        <InputBase onChange={e => setRepeatedPassword(e.target.value)} value={repeatedPassword} id='pass-rep' sx={passChangeInput} type='text' />
        <Box sx={{display: 'flex', gap: '1em', mt: '1em'}}>
            <Button sx={passBtns} onClick={handleCancel}>Cancel</Button>
            <Button sx={{
                ...passBtns, 
                bgcolor: '#000', 
                color: '#fff', 
                "&:hover": {
                    bgcolor: '#2f2f2f'
                }
            }} 
            onClick={handleSumbit} type='submit'>Apply</Button>
        </Box>
    </Box>
  )
}
