import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./slices/ShopSlice";
import FilterReducer from "./slices/FilterSlice";
import CustomerReducer from "./slices/CustomerSlice";
import CheckCustRegistration from "./slices/CheckCustomerSlice";
import CartReducer from "./slices/CartSlice";
import GenderSelectModalSlice from "./slices/GenderSelectModalSlice";
import AddressSlice from "./slices/AddressSlice";

export const store = configureStore({
    reducer: {
      shop: ShopReducer,
      filter: FilterReducer,
      customer: CustomerReducer,
      signModal: CheckCustRegistration,
      cart: CartReducer,
      genderModal: GenderSelectModalSlice,
      address: AddressSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch