'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../lib/store'

export default function activationAccountLayout({children}:any) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
