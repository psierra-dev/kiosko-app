import { API_BASE_URL } from "@config/config"
import { api } from "@utils/axios"
import axios, { AxiosError } from "axios"
type TerrorAxios = {
    msg: string
}
export const bestProductsStore = async (storeId: number) => {
    try {
        const products = axios.get(`${API_BASE_URL}/product-store/bestproducts/${storeId}`)

        return (await products).data
    } catch (error) {
        return error as AxiosError
    }

}

export const deleteProductService = async (productId: number) => {
    try {
        const respuesta = await api.delete(`/product-store/deleteproduct/${productId}`)
        return {data: respuesta.data, status: respuesta.status}
    } catch (error) {
        const {response} = error as AxiosError<TerrorAxios>;
    
        return {data: response?.data.msg, status: response?.status}
    }
}
export const updateProductService = async (productId: number, product_update: {precio:string, stock: boolean}) => {
    try {
        const respuesta = await api.put(`/product-store/updateproduct/${productId}`, {
            ...product_update
        })
        return {data: respuesta.data, status: respuesta.status}
    } catch (error) {
        const {response} = error as AxiosError<TerrorAxios>;
    
        return {data: response?.data.msg, status: response?.status}
    }
}