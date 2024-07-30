import { IAddressInfo } from '@/app/utils/types'
import { Typography } from '@mui/material'
import React from 'react'

export default function AddressInfo({ address }: { address: IAddressInfo }) {
  return (
    <>
        <Typography>{address.name} {address.surname}</Typography>
        <Typography>{address.email}</Typography>
        <Typography>{address.phone}</Typography>
        {address.company && <Typography>{ address.company}</Typography>}
        <Typography>{address.street}</Typography>
        <Typography>{address.postIndex}</Typography>
        <Typography>{address.region}</Typography>
        <Typography>{address.cityOrVillage}</Typography>
    </>
  )
}
