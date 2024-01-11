import { api } from "@utils/axios";
import { AxiosError } from "axios";
type TerrorAxios = {
    msg: string
}
export class CustomerService {
    constructor() {}

    async update(change) {
        try {
            const response = await api.put('/customer', change);

            return response;
        } catch (error) {
            const {response} = error as AxiosError<TerrorAxios>;
    
            return {data: response?.data.msg, status: response?.status}
        }
    }
}