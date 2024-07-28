import axios, { InternalAxiosRequestConfig } from "axios";
import { API_KEY } from "../utils/api";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_KEY
})

$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})  

export default $api