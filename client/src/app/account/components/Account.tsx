import { useAppSelector } from '@/app/lib/hooks'
import { Box, Button, Grid, Typography } from '@mui/material'
import NameChanger from './NameChanger';
import PasswordChanger from './PasswordChanger';
import { useState } from 'react';
import AddressField from './AddressField';
import theme from '@/app/theme';
import AllAddresses from './AllAddresses';
import EditIcon from '@mui/icons-material/Edit';

const titleText = {
    fontSize: {md: '1.3em', xs: '1em'},
    mb: '1em'
}

const deliveryBtn = {
    color: '#000',
    textTransform: 'capitalize',
    border: '1px solid #000',
    borderRadius: '0px',
    p: '5px 2em',
    transition: 'all .15s ease-in-out',
}

export default function Account() {
    const customer = useAppSelector(state => state.customer.customer)
    const address = useAppSelector(state => state.address.address)
    const [isDelivery, setIsDelivery] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
  return (
    <Grid container spacing={2} px={'1em'}>
        <Grid item xs={12} md={6} p={'1em'} >
            <Typography sx={titleText} variant='h4'>Personal Info</Typography>
            <NameChanger />
            <Typography>Email: <strong>{customer?.customer.email}</strong></Typography>
        </Grid>
        <Grid item xs={12} md={6} p={'1em'}>
            <Box mb={'3vh'}>
                <Typography sx={{...titleText, mb: '3vh'}} variant='h4'>The default Delivery method</Typography>
                <Typography sx={{fontWeight: 'bold', ml: '1em'}}>Empty</Typography>
            </Box>
            <Box>
                <Typography sx={{...titleText, mb: '3vh'}} variant='h4'>The default Payment method</Typography>
                <Typography sx={{fontWeight: 'bold', ml: '1em'}}>Empty</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} p={'1em'}>
            <Typography sx={titleText} variant='h4'>Delivery Address</Typography>
            {address && <AllAddresses />}
            {!isDelivery ? 
                <Button onClick={() => setIsDelivery(true)} sx={{
                    ...deliveryBtn,
                    [theme.breakpoints.up("md")]: {
                        '&:hover': {
                            transform: 'scale(0.97)'
                        }
                    }
                }}>Add Delivery Address</Button> 
                :
                <AddressField setIsDelivery={setIsDelivery}/>
            }
        </Grid>
        <Grid item xs={12} md={4} p={'1em'}>
           <Typography sx={titleText} variant='h4'>Change Password</Typography>
           {isPassword ? 
           <PasswordChanger setIsPassword={setIsPassword}/> 
           : 
           <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography>**********</Typography>
                <Button onClick={() => setIsPassword(true)}><EditIcon sx={{color: '#202020'}}/></Button>
           </Box>
           }
        </Grid>
    </Grid>
  )
}
