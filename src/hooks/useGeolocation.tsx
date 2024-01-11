import React, { useEffect, useState } from 'react'

const useGeolocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [error, setError] = useState<boolean>(false);


    useEffect(() => {
        if('geolocation' in navigator){
            const successHandler = position => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                setError(null);
              };

            const errorHandler = error => {
            setError(true);
            setLatitude(null);
            setLongitude(null);
            };
            navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
        }else {
            setError(true);

        }   
    }, [])
  return {latitude, longitude, error}
}

export default useGeolocation