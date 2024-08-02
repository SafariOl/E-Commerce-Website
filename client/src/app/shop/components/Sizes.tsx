import{ List } from '@mui/material'
import React  from 'react'
import SizeBtn from './SizeBtn'

export default function Size({sizes}:{sizes: string[]}) {
    
  return (
    <List sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
        {sizes.map(size => 
          <div key={size}>
            <SizeBtn size={size} />
          </div>        
        )}
    </List>
  )
}
