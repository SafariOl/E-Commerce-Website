import React from 'react'
import FilterListItem from './FilterListItem'

export default function FilterList ({list}:{list: string[] }) {
  return (
    <>
        {list.map(item =>
          <FilterListItem key={item} item={item}/>
        )}
    </>
  )
}
