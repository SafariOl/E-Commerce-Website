import { useAppDispatch, useAppSelector } from '@/app/lib/hooks'
import { addAddress } from '@/app/lib/thunks/addressThunk'
import { addressInputField, passBtns } from '@/app/utils/classes'
import { Box, Button, InputBase, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface IAddressProp {
    setIsDelivery: (value:boolean) => void
}

export default function AddressField({setIsDelivery}: IAddressProp) {
    const customer = useAppSelector(state => state.customer.customer?.customer)
    const dispatch = useAppDispatch()
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [company, setCompany] = useState<string | null>(null)
    const [street, setStreet] = useState<string>("")
    const [postIndex, setPostIndex] = useState<string>('')
    const [region, setRegion] = useState<string>("")
    const [cityOrVillage, setCityOrVillage] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [email, setEmail] = useState<string>("")
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
        setIsDelivery(false)
    }

    const handleSumbit = () => {
        if(!customer) return router.push('/login')
        if(!name || !surname || !street || !postIndex || !region || !cityOrVillage || !phone || !email) return
        setTimeout(() => {
            handleCancel()
        }, 500)
        dispatch(addAddress({
           customer_id: customer.customer_id, name, surname, company, street, postIndex: parseInt(postIndex), region, cityOrVillage, phone, email
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
            value: email || customer?.email,
            setValue: setEmail
        },
    ]

  return (
    <Box component='form'>
        {form.map(field => 
        <Box key={field.label} my={2}>
            <Typography>{field.label}</Typography>
            <InputBase sx={addressInputField} required={field.label !== "Company" ? true : false} onChange={e => field.setValue(e.target.value)} type='text' />
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
