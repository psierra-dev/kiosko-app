import { api, setAccessToken } from '@utils/axios'
import React, { useEffect, useState } from 'react';

export const useFetch = (initUrl: string) => {
    const [products, setProducts] = useState(null);
    const token = window.localStorage.getItem("token");
    const [state, setState] = useState({aproved: false, loading: false, error: false})
    const [approved, setApproved] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [url, setUrl] = useState("");
    const [data, setData] = useState<any>({});
    setAccessToken(token as string)


    useEffect(() => {
        console.log('useEffect')
    }, [])
    const getData = async () => {
        try{

        }catch (error) {

        }
    }
    
    const allProduct = async (id: number) => {
        setLoading(true)
        try {
            const response = await api.get(`${initUrl}${id}`);
            setData(response.data);
            setLoading(false)
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }
    
    const postFetch = async (obj: any) => {
        try {
            const response = await api.post(`${initUrl}`, obj)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        respon:{approved, loading, error, data},
        setUrl,
        postFetch,
        allProduct
}

}
