import React from 'react'
import {List} from '@mui/material'
import FilterListItem from './FilterListItem'


export default function FilterList ({list}:{list: string[] }) {
  return (
    <List sx={{mb: 1}}>
        {list.map(item =>
          <FilterListItem key={item} item={item}/>
        )}
    </List>
  )
}
