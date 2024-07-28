import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { chooseSize, removeSizeChoice } from '@/app/lib/slices/FilterSlice'
import { Checkbox, ListItem, Typography } from '@mui/material'
import React from 'react'

interface ISizeProp {
    size: string,
    idx: number
}

const checkboxClass = {
    position: 'absolute', top: 0, left: 0, width: '100%', height:'100%', zIndex: 111, opacity: 0
}

const listItemClass = {
    position:'relative', 
    width: '76px', 
    height: '47px', 
    borderRadius: '62px', 
    p:'10px 20px', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
}

export default function SizeBtn({size, idx}:ISizeProp) {
    const sizeChecked = useAppSelector(state => state.filter.sizeForCart)
    const dispatch = useAppDispatch()
    
    const handleChange = () => {
        if(sizeChecked !== size) dispatch(chooseSize(size))
        else dispatch(removeSizeChoice())
    }

    return(
        <ListItem sx={{...listItemClass, bgcolor: sizeChecked === size ? '#000' : 'none', border: '1px solid #000'}}>
            <Checkbox sx={checkboxClass} checked={sizeChecked === size} onChange={handleChange}/>
            <Typography variant='body1' sx={{color: sizeChecked === size ? '#fff': '#000', fontSize: '14px'}}>{size}</Typography>
        </ListItem>
    )
}
