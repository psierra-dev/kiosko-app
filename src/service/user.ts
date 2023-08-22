import {API_BASE_URL} from "@config/config";
import axios, { AxiosError } from "axios";

type TresponsePost = {
    token: string,
    role: string
}

type ApiError = {
    message: string,
    statusCode: number
}

console.log(API_BASE_URL)

export class Auth{
    constructor(){}

    async login(datos: {email: string, password: string}){
        try {
            const {data, status} = await axios.post<TresponsePost>(`${API_BASE_URL}users/login`, datos)
    
            return {token: data.token, status: status, role: data.role}
        } catch (error) {
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message);
        }
    }
    async register(datos: TUser) {
        try {
            const {data, status} = await axios.post<TresponsePost>(`${API_BASE_URL}users/register`, datos)
    
            return {data, status}
        } catch (error) {
            console.log(error)
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message);
        }
    }
}
