import{ List } from '@mui/material'
import React  from 'react'
import SizeBtn from './SizeBtn'

interface IProp {
    sizes: Array<string>
}

export default function Size(props:IProp) {
    const {sizes} = props
    
  return (
    <List sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
        {sizes.map((size, idx) => 
          <div key={size}>
            <SizeBtn size={size} idx={idx}/>
          </div>
        )}
    </List>
  )
}
