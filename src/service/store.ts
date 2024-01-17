import { api } from "@utils/axios";

type TCreate = TUser & TStore
type ApiError = {
    message: string,
    statusCode: number
}

export class StoreService {
    constructor(){}
    
    async create(data: TCreate) {
        try {
            const response = await api.post(`/stores/`, data)
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

