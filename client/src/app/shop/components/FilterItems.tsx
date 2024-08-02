import React from 'react'
import FilterList from './FilterList'
import { itemsList } from '@/app/utils/lists'

export default function FilterItems() {
  return <FilterList list={itemsList} />
}
