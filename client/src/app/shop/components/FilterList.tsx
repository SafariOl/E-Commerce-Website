import React from 'react'
import {List} from '@mui/material'
import FilterListItem from './FilterListItem'

interface IProps {
  list: Array<any> 
}

export default function FilterList (props:IProps) {
  const {list} = props
  return (
    <List sx={{mb: 1}}>
        {list.map(item =>
          <FilterListItem key={item} item={item}/>
        )}
    </List>
  )
}
