import { List } from '@mui/material'
import React from 'react'
import FilterList from './FilterList'
import { itemsList } from '@/app/utils/lists'

export default function FilterItems() {
  return <List sx={{mb: 1}}><FilterList list={itemsList} /></List>
}
