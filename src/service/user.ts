import {API_BASE_URL} from "@config/config";
import axios, { AxiosError } from "axios";

type TresponsePost = {
    token: string
}

type TerrorAxios = {
    msg: string
}
export const postLogin =  async (datos: any) => {
    try {
        const {data, status} = await axios.post<TresponsePost>(`${API_BASE_URL}/user/login`, datos)

        return {data: data.token, status: status}
    } catch (error) {
        const {response} = error as AxiosError<TerrorAxios>;

        return {data: response?.data.msg, status: response?.status}
    }
}

export const postRegister =  async (datos: any) => {
    try {
        const {data, status} = await axios.post<TresponsePost>(`${API_BASE_URL}/user/register`, datos)

        return {data, status}
    } catch (error) {
        const {response} = error as AxiosError<TerrorAxios>;

        return {data: response?.data.msg, status: response?.status}
    }
}