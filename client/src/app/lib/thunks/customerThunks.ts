import $api from "@/app/http"
import { ICustomerName, ICustomerPassword, IError, ILogin, IRegister } from "@/app/interfaces/Customer"
import { API_KEY } from "@/app/utils/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const customerRegister = createAsyncThunk<
void,
IRegister,
{rejectValue: IError}
>('/src/customerRegister', async(registerInfo, {rejectWithValue}) => {
    try {
        const res = await $api.post(`${API_KEY}/customers/register`, {...registerInfo})
        return res.data
    } catch (err:any) {
        return rejectWithValue({ message: err.response.data.message, status: err.response?.status });
    }
})

export const customerLogin = createAsyncThunk<
void,
ILogin,
{ rejectValue: IError }
>('/src/customerLogin', async(loginInfo, { rejectWithValue }) => {
    try {
        const res = await $api.post(`${API_KEY}/customers/login`, {...loginInfo})
        return res.data
    } catch (err:any) {
        return rejectWithValue({ message: err.response.data.message, status: err.response?.status });
    }
})

export const activate = createAsyncThunk('/src/activate', async(activationLink:string) => {
    const res = await axios.get(`${API_KEY}/customers/activate/${activationLink}`)
    return res.data
})

export const refresh = createAsyncThunk('/src/refresh', async() => {
    const res = await axios.get(`${API_KEY}/customers/refresh`, {
        withCredentials: true,
    })
    return res.data
})

export const changeName = createAsyncThunk('/src/changeName', async(customerInfo:ICustomerName) => {
    const res = await $api.post(`${API_KEY}/customers/change-name`, {...customerInfo})
    return res.data
})

export const changePassword = createAsyncThunk('/src/changePassword', async(customerInfo:ICustomerPassword) => {
    const res = await $api.post(`${API_KEY}/customers/change-password`, {...customerInfo})
    return res.data
})

export const logout = createAsyncThunk('/src/logout', async() => {
    await $api.post(`${API_KEY}/customers/logout`)
})