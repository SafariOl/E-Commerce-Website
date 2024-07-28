import React, { useState } from 'react'
import { KeyboardArrowRight } from '@mui/icons-material'
import { ListItemContent } from '@mui/joy'
import { ListItem, ListItemButton } from '@mui/material'
import { useAppDispatch } from '@/app/lib/hooks'
import { removeCategory, removeColor, removeStyle, setCategory, setColor, setStyle } from '@/app/lib/slices/FilterSlice'
import { colors, dressStyleList, itemsList } from '@/app/utils/lists'
import CheckIcon from '@mui/icons-material/Check';

const listItemButton = {
  mx: -4, 
  px: '5px',
  borderRadius: 2,
}

interface IProp {
  item: string
}

export default function FilterListItem(prop:IProp) {
  const {item} = prop
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleChange = () => {
    setIsChecked(!isChecked)
    
    switch (true) {
      case !isChecked && itemsList.includes(item):
        return dispatch(setCategory(item));
      case isChecked && itemsList.includes(item):
        return dispatch(removeCategory(item));
      case !isChecked && dressStyleList.includes(item):
        return dispatch(setStyle(item));
      case !isChecked && colors.includes(item):
        return dispatch(setColor(item));
      case isChecked && colors.includes(item):
        return dispatch(removeColor(item));
      default:
        return dispatch(removeStyle(item));
    }
  }

  return (
    <ListItem onClick={handleChange} key={item} sx={{py: 0, my: '5px'}}>
        <ListItemButton 
          sx={{ ...listItemButton, bgcolor: isChecked ? '#ccc' : 'none', '&:hover': {bgcolor: isChecked ? '#c7c7c7' : '#ddd'}}}>
        <ListItemContent sx={{textTransform: 'capitalize'}}>{item}</ListItemContent>
        {isChecked ? <CheckIcon sx={{fontSize: '1.5em', color: '#0991bf'}}/> : <KeyboardArrowRight />}
        </ListItemButton>
    </ListItem>
  )
}
