import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { removeSize, setSize } from '@/app/lib/slices/FilterSlice'
import { checkboxSize, sizeListBtn } from '@/app/utils/classes'
import { Checkbox, ListItem, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function SizeBtn({size}:{size: string}) {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const sizeFilter = useAppSelector(state => state.filter.size)
    
    useEffect(() => {
        !sizeFilter.length && setIsChecked(false)
    }, [sizeFilter])

    const handleChange = () => {
        if(isChecked) {
            dispatch(removeSize(size))
            setIsChecked(!isChecked)
        }
        else {
            dispatch(setSize(size))
            setIsChecked(!isChecked)
        }
    }

    return(
        <ListItem sx={{...sizeListBtn, bgcolor: isChecked ? '#000' : 'none', border: '1px solid #000'}}>
            <Checkbox sx={checkboxSize} checked={isChecked} onChange={handleChange}/>
            <Typography variant='body1' sx={{color: isChecked ? '#fff': '#000', fontSize: '14px'}}>{size}</Typography>
        </ListItem>
    )
}
