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
  const cart = useAppSelector(state => state.cart.cart)
  const router = useRouter()
  const handleClick = () => {
    if(customer) router.push('/account')
    else setShow(true)
  }

  return (
    <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
        <IconButton href='/cart' sx={{position: 'relative', width:'45px', height: '45px'}}>
          <LuShoppingCart fontSize={25} color='#000'/>
          {cart.length > 0 && <Box sx={{position: 'absolute', bottom: 0, right: 0, fontSize: '.7rem', boxShadow: '0 0 3px #000', fontWeight: '600', borderRadius: '50%', color: '#000', bgcolor: 'yellow', width: '16px', height: '16px'}}>{cart.length}</Box>}
        </IconButton>
        <IconButton onClick={handleClick}>
          <FaRegCircleUser fontSize={25} color='#000'/>
          <UserBlock show={show} setShow={setShow}/>
        </IconButton>
    </Box>
  )
}
