import { api } from "@utils/axios"


type TresponsePost = {
    token: string,
    role: string
}

type ApiError = {
    message: string,
    statusCode: number
}


export class Auth{
    constructor(){}

    async login(datos: {email: string, password: string}){
        try {
            const {data, status} = await api.post<TresponsePost>(`/users/login`, datos)
    
            return {token: data.token, status: status, role: data.role}
        } catch (error) {
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message);
        }
    }
    async register(datos: TUser) {
        try {
            const {data, status} = await api.post<TresponsePost>(`/users/register`, datos)
    
            return {data, status}
        } catch (error) {
            console.log(error)
            const apiError: ApiError = error.response.data;
            throw new Error(apiError.message);
        }
    }
}
