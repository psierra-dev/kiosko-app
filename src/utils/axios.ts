import axios, { AxiosError } from "axios";
import { GetServerSidePropsContext } from "next";

const isServer = () => {
    return typeof window === "undefined";
}
let accessToken= '';
export const setAccessToken = (_accessToken: string) => {
    accessToken = _accessToken
}
let context= <GetServerSidePropsContext>{};
export const setContext = (_context: GetServerSidePropsContext) => {
    context = _context;
}
export const api = axios.create({
    baseURL: 'http://localhost:3001'
})


api.interceptors.request.use((config) => {
    if(accessToken && config.headers){
        config.headers.Authorization = `Bearer ${accessToken}`;
    }else if (context.req.cookies && config.headers){
        console.log('aqui2')
        const accesstoken2 = context.req.cookies?.token;
        config.headers.Authorization = `Bearer ${accesstoken2}`;
    }

    return config;
})