import { TodoContext } from '@context/context'
import { getStoreAround } from '@service/store'
import React, { useContext, useEffect } from 'react'
import { useSesionStorage } from './useSesionStorage'

const useLocation = () => {
    const {todoState, getComercios} = useContext(TodoContext)
    const {LatLng} = todoState;
    const {get} = useSesionStorage('lnglat')
    const lnglat = get();

    const onSuccess = async (location: any) => {
        const res = await getStoreAround(location.coords.latitude, location.coords.longitude)
        getComercios(res.data)
    }

    const onError = (error: any) => {
        console.log(error)
    }


    useEffect(() => {
        if(LatLng?.lat === null || LatLng?.lng === null){
            console.log('geolocation')
            if (!("geolocation" in navigator)) {
                onError({
                code: 0,
                message: "Geolocation not supported",
                });
            }
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }else {
            console.log('else')
            const Func = async () => {
                const res = await getStoreAround(LatLng.lat as number, LatLng.lng as number);
                getComercios(res?.data )
            }
            Func()
        }
        
    }, [LatLng]);
    return []
}

export default useLocation