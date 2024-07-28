'use client'
import { store } from '@/app/lib/store'
import { Box } from '@mui/material'
import React from 'react'
import { Provider } from 'react-redux'
import ActivationBlock from './ActivationBlock'
import { justifyCenterBlock } from '@/app/utils/classes'

export default function page({params}:any) {

    return (
    <Provider store={store}>
        <Box sx={justifyCenterBlock}>
            <ActivationBlock activationLink={params.activationLink[0]} />
        </Box>
    </Provider>
  )
}
