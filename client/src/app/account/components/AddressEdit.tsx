import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { editAddress } from '@/app/lib/thunks/addressThunk'
import { addressInputField, passBtns } from '@/app/utils/classes'
import { IAddressInfo } from '@/app/utils/types'
import { Box, Button, InputBase, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function AddressEdit({ address, setIsEdit }: { address: IAddressInfo, setIsEdit: (value: boolean) => void }) {
    const dispatch = useAppDispatch()
    const customer = useAppSelector(state => state.customer.customer?.customer)

    const [name, setName] = useState<string>(address.name)
    const [surname, setSurname] = useState<string>(address.surname)
    const [company, setCompany] = useState<string | null>(address.company)
    const [street, setStreet] = useState<string>(address.street)
    const [postIndex, setPostIndex] = useState<string>(address.postIndex.toString())
    const [region, setRegion] = useState<string>(address.region)
    const [cityOrVillage, setCityOrVillage] = useState<string>(address.cityOrVillage)
    const [phone, setPhone] = useState<string>(address.phone)
    const [email, setEmail] = useState<string>(address.email)
    const router = useRouter()

    const handleCancel = () => {
        setName("")
        setSurname("")
        setCompany("")
        setPostIndex("")
        setStreet("")
        setRegion("")
        setCityOrVillage("")
        setPhone("")
        setEmail("")
        setIsEdit(false)
    }

    const handleSumbit = () => {
        if(!customer) return router.push('/login')
        setTimeout(() => {
            handleCancel()
        }, 500)
        dispatch(editAddress({
           customer_id: customer.customer_id, address_id: address.address_id, name, surname, company, street, postIndex: parseInt(postIndex), region, cityOrVillage, phone, email
        }))
    }

    const form = [
        {
            label: "Name*",
            value: name,
            setValue: setName
        },
        {
            label: "Surname*",
            value: surname,
            setValue: setSurname
        },
        {
            label: "Company",
            value: company,
            setValue: setCompany
        },
        {
            label: "Street*",
            value: street,
            setValue: setStreet
        },
        {
            label: "Post index*",
            value: postIndex,
            setValue: setPostIndex
        },
        {
            label: "Region",
            value: region,
            setValue: setRegion
        },
        {
            label: "City Or Village*",
            value: cityOrVillage,
            setValue: setCityOrVillage
        },
        {
            label: "Phone* ( international format )",
            value: phone,
            setValue: setPhone
        },
        {
            label: "Email*",
            value: email,
            setValue: setEmail
        },
    ]
  return (
    <Box component='form'>
        {form.map(field => 
        <Box key={field.label} my={2}>
            <Typography>{field.label}</Typography>
            <InputBase sx={addressInputField} required={field.label !== "Company" ? true : false} defaultValue={field.value} onChange={e => field.setValue(e.target.value)} type='text' />
        </Box>
        )}
        <Box sx={{display: 'flex', gap: '1em', mt: '1em'}}>
            <Button sx={passBtns} onClick={handleCancel}>Cancel</Button>
            <Button sx={{
                ...passBtns, 
                bgcolor: '#000', 
                color: '#fff', 
                "&:hover": {
                    bgcolor: '#2f2f2f'
                }
            }} 
            onClick={handleSumbit}>Apply</Button>
        </Box>
    </Box>
  )
}
