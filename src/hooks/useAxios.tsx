import axios, { AxiosInstance } from 'axios';
import React, { useEffect, useState } from 'react'

const useAxios = () => {
    const [instanceAxios, setInstance ] = useState<AxiosInstance>();

        useEffect(() => {

        const funct = async () => {
            const token = window.localStorage.getItem('token');
            console.log("token: ", token)
            if(token){
                console.log('si hay token')
                const instance = axios.create({
                    baseURL:'http://localhost:3001/lo'
                })
                instance.defaults.headers.common['access-token'] = token;
                console.log('instance en useAxios: ' , instance)

                instance.get('/get')
                setInstance(instance)
            }
        }

        funct()
    }, [])
    console.log(instanceAxios)
    return {instanceAxios}
}

export default useAxios