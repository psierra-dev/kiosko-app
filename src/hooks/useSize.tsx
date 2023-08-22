import { TodoContext } from '@context/context';
import {useState, useEffect, useContext} from 'react'

export const useSize = () => {
    const [windows, setWindows] = useState<Window>()
    const {changeWidth} = useContext(TodoContext)
    const [width, setWidth] = useState<number | undefined>(
        windows?.innerWidth
    );

    useEffect(() => {
        setWindows(window)
    }, [])

    useEffect(() => {
        function resizeListener() {
        setWidth(window.innerWidth)
    }
        window.addEventListener("resize", resizeListener);
    }, [])

    useEffect(() => {
        if(width !== undefined){
            console.log(width)
            if(width < 852 ){
                changeWidth(true)
            }else{
                changeWidth(false)
            }
        }
    }, [width])

    console.log('sizee')
}
