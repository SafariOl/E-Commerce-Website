import { API_KEY } from "@/app/utils/api";
import { IAddressInfo, RemoveAddress } from "@/app/utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAddress = createAsyncThunk("/src/getAddress", async(customer_id: string) => {
    const res = await axios.get(`${API_KEY}/customers/get-address/${customer_id}`)
    return res.data
})

export const addAddress = createAsyncThunk("/src/addAddress", async(addressInfo: IAddressInfo) => {
    const res = await axios.post(`${API_KEY}/customers/add-address`, {...addressInfo})
    return res.data
})

export const editAddress = createAsyncThunk("/src/editAddress", async(addressInfo: IAddressInfo) => {
    const res = await axios.put(`${API_KEY}/customers/edit-address`, {...addressInfo})
    return res.data
})

export const removeAddress = createAsyncThunk("/src/removeAddress", async({customerId, addressId}:RemoveAddress) => {
    const res = await axios.delete(`${API_KEY}/customers/remove-address/${customerId}/${addressId}`)
    return res.data
})