import React, { useEffect, useState } from 'react'
import { KeyboardArrowRight } from '@mui/icons-material'
import { ListItemContent } from '@mui/joy'
import { Box, ListItemButton } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { removeCategory, removeColor, removeStyle, setCategory, setColor, setStyle } from '@/app/lib/slices/FilterSlice'
import { colors, dressStyleList, itemsList } from '@/app/utils/lists'
import CheckIcon from '@mui/icons-material/Check';


export default function FilterListItem({item}:{item: string}) {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const filter = useAppSelector(state => state.filter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(!filter.category.length && !filter.color.length && !filter.size.length && !filter.style.length) setIsChecked(false)
  }, [filter])

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
    <Box onClick={handleChange} px={0} key={item} sx={{my: '5px'}}>
        <ListItemButton 
          sx={{ borderRadius: 2, bgcolor: isChecked ? '#ccc' : 'none', '&:hover': {bgcolor: isChecked ? '#c7c7c7' : '#ddd'}}}>
        <ListItemContent sx={{textTransform: 'capitalize'}}>{item}</ListItemContent>
        {isChecked ? <CheckIcon sx={{fontSize: '1.5em', color: '#0991bf'}}/> : <KeyboardArrowRight />}
        </ListItemButton>
    </Box>
  )
}
