import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { addReview } from '@/app/lib/thunks/shopThunks'
import { passBtns } from '@/app/utils/classes'
import { Box, Button, InputBase, Rating, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function ReviewAdding({setIsWriteReview, product_id}: {setIsWriteReview: (value: boolean) => void, product_id: string}) {
    const [review, setReview] = useState<string>("")
    const [rate, setRate] = useState<number | null>(0)
    const customer = useAppSelector(state => state.customer.customer?.customer)
    const dispatch = useAppDispatch()

    const handleCancel = () => {
        setRate(null)
        setReview("")
        setIsWriteReview(false)
    }

    const handleSumbit = () => {
        if(!rate || !review || !customer) return
        dispatch(addReview({user: customer.customer_id, product_id, rate, review}))
        handleCancel()
    }

  return (
    <Box component={'form'} mb={'5vh'} alignSelf={'flex-start'}>
        <Typography>Rating</Typography>
        <Rating name="simple-controlled" value={rate}
        onChange={(event, newValue) => {
          setRate(newValue);
        }}/>
        <Typography>Review</Typography>
        <TextField onChange={e => setReview(e.target.value)} type='text'/>
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
            onClick={handleSumbit}>Apply</Button>
        </Box>
    </Box>
  )
}
