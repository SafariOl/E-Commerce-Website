import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import UserBlock from './UserBlock';
import { useAppSelector } from '../lib/hooks';
import { useRouter } from 'next/navigation';

export default function HeaderControls() {
  const [show, setShow] = useState<boolean>(false)
  const customer = useAppSelector(state => state.customer.customer)
  const router = useRouter()
  const handleClick = () => {
    if(customer) router.push('/account')
    else setShow(true)
  }

  return (
    <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        <IconButton href='/cart'>
          <LuShoppingCart fontSize={25} color='#000'/>
        </IconButton>
        <IconButton onClick={handleClick}>
          <FaRegCircleUser fontSize={25} color='#000'/>
          <UserBlock show={show} setShow={setShow}/>
        </IconButton>
    </Box>
  )
}
