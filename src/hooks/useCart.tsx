import { TodoContext } from '@context/context';
import React, { useState, useEffect, useContext } from 'react'

export const useCart = () => {
    const {todoState, updateProductCart, selectStoreCart} = useContext(TodoContext);
    const {productsCart, storeCart, productCartStore} = todoState;
    const [total, setTotal] = useState(0);
    const [active, setActive] = useState<TCommerce >(storeCart[0]);

    useEffect(() => {
        const totalHandler = () => {
            let sum = 0;
            for(let i =0; i < productCartStore.length; i++){
                sum = sum +  parseFloat(productCartStore[i].product.precio as string)
            }
    
            setTotal(sum)
        }

        totalHandler()
    }, [productsCart, updateProductCart])

    useEffect(() => {
        if(storeCart.length > 0){
            setActive(storeCart[0])
        }
    }, [storeCart])

    useEffect(() => {
        selectStoreCart(active?.id as number)
    }, [active])


    const handleStore = (e: TCommerce) =>  setActive(e)
    return {
        total,
        active,
        handleStore
    }
}
