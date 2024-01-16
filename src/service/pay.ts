
import { api } from "@utils/axios";



type ApiError = {
    message: string,
    statusCode: number
}

export class PayService {
    constructor(){}
    
    async pay(products, storeId, orderId) {

        try {
            const response = await api.post("/pay", {products, storeId, orderId})

            return response
        } catch (error) {
            console.log(error)
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message);
        }
    }
}