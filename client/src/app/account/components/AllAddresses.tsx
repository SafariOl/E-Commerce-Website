import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AddressInfo from './AddressInfo';
import AddressEdit from './AddressEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IAddressInfo } from '@/app/utils/types';
import { removeAddress } from '@/app/lib/thunks/addressThunk';

export default function AllAddresses() {
    const addresses = useAppSelector(state => state.address.address)
    const customer = useAppSelector(state => state.customer.customer?.customer)
    const dispatch = useAppDispatch()
    const [isEdit, setIsEdit] = useState(false)

    const handleRemove = (address: IAddressInfo) => {
        if(!customer || address.address_id == undefined) return
        dispatch(removeAddress({customerId: customer.customer_id, addressId: address.address_id}))
    }
    
  return (
    <Grid mb={'3vh'} container spacing={2}>
        {addresses &&
            addresses.map((address, idx) =>{ 
                
            return (
                <Grid item xs={12} px={'2em'} md={4} key={address.address_id} position={'relative'}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        {idx == 0 ? <Typography>Previously selected address</Typography>
                        :
                        <Typography>Additional address</Typography>
                        }
                        <Button onClick={() => setIsEdit(true)}><EditIcon sx={{color: '#202020'}}/></Button>
                    </Box>
                    {isEdit ? 
                    <AddressEdit address={address} setIsEdit={setIsEdit}/>
                     :
                    <AddressInfo address={address}/>
                    }
                    {idx > 0 && <Button sx={{position: 'absolute', bottom: 0, right: 0, color: 'red'}} onClick={() => handleRemove(address)}><DeleteIcon /></Button>}
                </Grid>
            )
        })
        }
    </Grid>
  )
}
