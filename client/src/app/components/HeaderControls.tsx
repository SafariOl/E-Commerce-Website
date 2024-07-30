import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IconDisplayWrapper } from '../utils/classes';

export default function HeaderControls() {
  return (
    <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        <IconDisplayWrapper>
          <IconButton>
              <IoMdSearch fontSize={28} color='#000'/>
          </IconButton>
        </IconDisplayWrapper>
        <IconButton href='/cart'>
          <LuShoppingCart fontSize={25} color='#000'/>
        </IconButton>
        <IconButton href='/account'>
          <FaRegCircleUser fontSize={25} color='#000'/>
        </IconButton>
    </Box>
  )
}
