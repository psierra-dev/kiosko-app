import { API_BASE_URL } from "@config/config";
import { api } from "@utils/axios";
import axios, { AxiosError } from "axios";


//const API_BASE_URL = "http://localhost:3001/mercadopago/checkout";
type TerrorAxios = {
    msg: string
}
export const AddOrder  = async ({products, storeId, amount, infoClient, typePayment, delivery}: any) => {
    try {
        const resMP = await api.post(`${API_BASE_URL}/mercadopago/checkout`, {products, storeId, amount, infoClient, typePayment, delivery });
        console.log(resMP)
        return {data: resMP.data, status: resMP.status}
    } catch (error) {
        const {response} = error as AxiosError<TerrorAxios>;
    
        return {data: response?.data.msg, status: response?.status}
    }
    

}

export const UpdateOrder = async (id: string, state: string) => {
    try {
        const res = await axios.put(`${API_BASE_URL}/order/updateorder/${id}`, {state})

        return res
    } catch (error) {
        return error as AxiosError
    }
}

export const countAndAmount = async (id: number) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/order/infosel/${id}`)

        return res.data
    } catch (error) {
        return error as AxiosError
    }
}

export const getOrders = async (id: number | string | undefined, type: string) => {
    try {
        const res = await api.get(`${API_BASE_URL}/order/getorder?id=${id}&type=${type}`)

        return {data: res.data, status: res.status}
    } catch (error) {
        const {response} = error as AxiosError
        return {data: response.data, status: response.status}
    }
}

export const getDetailOrders = async (id: number | string | undefined) => {
    try {
        const res = await api.get(`${API_BASE_URL}/order/${id}`)

        return {data: res.data, status: res.status}
    } catch (error) {
        const {response} = error as AxiosError
        return {data: response.data, status: response.status}
    }
}