'use client'
import { Provider } from 'react-redux'
import { store } from '@/app/lib/store'
import ProductComponent from './components/ProductComponent'

export default function ProductDetails({params}:any) {
  return (
      <Provider store={store}>
          <ProductComponent productId={params.productId}/>
      </Provider>
  )
}
