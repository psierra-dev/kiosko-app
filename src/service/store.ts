import { API_BASE_URL } from "@config/config";
import axios from "axios";

export const getStoreAround = async (lat: number, lng: number) => {
    console.log(lat, lng)
    try {
        const resp = await axios.get(`${API_BASE_URL}/store/getstoresaround?lat=${lat}&lng=${lng}`);

        return resp as any
    } catch (error) {
        return error as any
    }
}