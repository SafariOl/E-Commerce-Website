import $api from "@/app/http"
import { ILogin, IRegister } from "@/app/interfaces/Customer"
import { API_KEY } from "@/app/utils/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const customerRegister = createAsyncThunk('/src/customerRegister', async(registerInfo:IRegister) => {
    const res = await $api.post(`${API_KEY}/customers/register`, {...registerInfo})
    return res.data
})

export const customerLogin = createAsyncThunk('/src/customerLogin', async(loginInfo:ILogin) => {
    const res = await $api.post(`${API_KEY}/customers/login`, {...loginInfo})
    return res.data
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