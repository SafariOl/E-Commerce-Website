import { Box } from '@mui/material'
import CartItem from './CartItem'
import { ICart } from '@/app/interfaces/Cart'


export default function CartItems({cart}:{cart: ICart[]}) {
  return (
    <Box sx={{
        my: 2,
        py: '20px',
        width: '100%',
        maxWidth: {lg: '715px'}
    }}>
        {cart.map(item => 
            <div key={item.product_id}>
                <CartItem
                    product_id={item.product_id}
                    item_name={item.item_name}
                    price={item.price}
                    color={item.color}
                    count={item.count}
                    main_img={item.main_img}
                    size={item.size}
                    gender={item.gender}
                />
            </div>
        )}
    </Box>
  )
}
