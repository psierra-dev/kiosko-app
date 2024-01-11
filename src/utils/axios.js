import axios from "axios";
import { getCookie } from "cookies-next";

const token = getCookie("token");
let accessToken = "";
export const setAccessToken = (_accessToken) => {
  accessToken = _accessToken;
};
export const setContext = (_context) => {
  context = _context;
};

console.log("API_URL", process.env.API_URL);
console.log("NEXT_PUBLIC_API_URL: ", process.env.NEXT_PUBLIC_API_URL);
export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

api.interceptors.request.use((config) => {
  console.log(token, "tokeeen");
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
