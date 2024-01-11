import { API_BASE_URL } from "@config/config";
import { api } from "@utils/axios";
import axios from "axios";

type TCreate = TUser & TStore
type ApiError = {
    message: string,
    statusCode: number
}

export class StoreService {
    constructor(){}
    
    async create(data: TCreate) {
        try {
            const response = await axios.post(`${API_BASE_URL}stores/`, data)
            return response
        } catch (error) {
            console.log(error)
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message);
        }
    }

    async update(data){
        try {
            const response = await api.put("/stores", data)
            return response
        } catch (error) {
            console.log(error)
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message);
        }
    }
    async conectMercadoPago() {
        try {
            const response = await api.get("/mp/auth")
            console.log(response)
            return response.data
        } catch (error) {
            console.log(error)
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message)
        }
    }
}

export const getStoreAround = async (lat: number, lng: number) => {
    console.log(lat, lng)
    try {
        const resp = await axios.get(`${API_BASE_URL}/store/getstoresaround?lat=${lat}&lng=${lng}`);

        return resp as any
    } catch (error) {
        return error as any
    }
}