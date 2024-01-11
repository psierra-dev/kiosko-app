import { api } from "@utils/axios";


type ApiError = {
    message: string,
    statusCode: number
}
export class OrderService {
    constructor() {}

    async create(data) {
        try {
            const response = await api.post("/order", data)

            return response
        } catch (error) {
            console.log(error)
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message);
        }
    }

    async update(change, id) {
        try {
            const response = await api.put("/order/" + id, change)

            return response
        } catch (error) {
            console.log(error)
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message);
        }
    }
}
