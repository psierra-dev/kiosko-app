import {API_BASE_URL} from "@config/config";
import axios, { AxiosError } from "axios";


export const getCommerce =  async (datos: any) => {
    try {
        const {data, status} = await axios.get(`${API_BASE_URL}/store/getstore`, datos)

        return {data: data.token, status: status}
    } catch (error) {
        const {response} = error as AxiosError;

        return {data: response, status: response?.status}
    }
}