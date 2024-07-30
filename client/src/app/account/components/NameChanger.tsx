import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { Box, Button, InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { changeName } from '@/app/lib/thunks/customerThunks';

export default function NameChanger() {
    const customer = useAppSelector(state => state.customer.customer)
    const loading = useAppSelector(state => state.customer.loading)
    const [isNameChange, setIsNameChange] = useState(false)
    const [newName, setNewName] = useState<string>("")
    const dispatch = useAppDispatch()

    const handleNameSubmit = () => {
        if(!newName)return setIsNameChange(false)
        if(customer)
            dispatch(changeName({newName, customer_id: customer?.customer.customer_id}))
        setIsNameChange(false)
    }
  return (
      <Box mb={'.5em'}>
        {loading && <Typography variant='h1'>Loading...</Typography>}
        {isNameChange ? 
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent: 'space-between',
                gap: '15px',
                maxWidth: '300px'
            }} >
                <InputBase sx={{width: '100%', border: '1px solid #777', px: '15px'}} type='text' onChange={e => setNewName(e.target.value)} placeholder='Enter your new username'/>
                <Button sx={{
                    bgcolor: "#777",
                    color: "#fff",
                    border: 'none'
                }} onClick={handleNameSubmit}>Save</Button>
            </Box>
        :
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent: 'space-between',
                maxWidth: '300px'
            }} >
                <Typography>{customer && customer.customer.user_name}</Typography>
                <Button onClick={() => setIsNameChange(true)}><EditIcon sx={{color: "#202020"}}/></Button>
            </Box>
        }
    </Box>
)}
