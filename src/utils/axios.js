import axios from "axios";
import { getCookie } from "cookies-next";

const isServer = () => {
  return typeof window === "undefined";
};

const token = getCookie("token");
let accessToken = "";
export const setAccessToken = (_accessToken) => {
  accessToken = _accessToken;
};
let context = {};
export const setContext = (_context) => {
  context = _context;
};
export const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.interceptors.request.use((config) => {
  console.log(token);
  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

/*api.interceptors.request.use((config) => {
    if(accessToken && config.headers){
        config.headers.Authorization = `Bearer ${accessToken}`;
    }else if (context.req.cookies && config.headers){
        console.log('aqui2')
        const accesstoken2 = context.req.cookies?.token;
        config.headers.Authorization = `Bearer ${accesstoken2}`;
    }

    return config;
})*/
