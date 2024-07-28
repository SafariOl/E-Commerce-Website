'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../lib/store'
import CartPageComponent from './components/CartPageComponent'


export default function CartPage() {

  return (
    <Provider store={store}>
        <CartPageComponent />
    </Provider>
  )
}
