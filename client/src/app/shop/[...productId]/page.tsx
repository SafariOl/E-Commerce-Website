'use client'
import ProductComponent from './components/ProductComponent'

export default function ProductDetails({params}:any) {
  return (
    <>
      <ProductComponent productId={params.productId}/>
    </>
  )
}
