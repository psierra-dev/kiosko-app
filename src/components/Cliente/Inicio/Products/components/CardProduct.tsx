
import { IoCartOutline } from 'react-icons/io5';
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { TodoContext } from "@context/context";
import Image from "next/image";
import { Text } from "@styles/style";
import { SCardProduct } from "./style";
import { useSesionStorage } from '@hooks/useSesionStorage';
interface Prop {
    product: TProductInfo
}


export const CardProduct = ({product}: Prop) => {
    const {set} = useSesionStorage('productscart');
    const [setCart, setSetCart] = useState();
    const [loader , setLoader] = useState(false);
    const {todoState, addProductCart} = useContext(TodoContext);
    const {productsCart} = todoState;

    const addProductsToCart = async (p: TProductInfo) => {
            setLoader(true);
            const bool =  productsCart.some(e => e.id === p.id);
            console.log(bool)
            if(!bool ){
                set(product)
                addProductCart(product)
                setLoader(false)
            }else{
                setLoader(false)
                alert('producto ya agregado')
            }
    }

    console.log(product.product.imgurl)
    return (
        <SCardProduct>
            <div className='con'>
                <div className='conimg'>
                    
                </div>
                <div className='con1'>
                    <div>
                        <Text size='12px' weight='400' lineheight='15px' color='#ADADAD'>
                            {product.product.categoria}

                        </Text>
                    </div>
                    <div>
                        <Text size='16px' weight='600' lineheight='20px' color='#253D4E'>
                            {product.product.name}
                        </Text>
                    </div>
                </div>

                <div className='con2'>
                    <div>
                        <Text size='16px' weight='600' lineheight='20px' color='#FFB531'>
                            {`$${product.product.precio}`}
                        </Text>
                    </div>
                    <button onClick={ () => addProductsToCart(product)}>
                        {!loader ?<><IoCartOutline /> Add</>  : "agregando.."}
                    </button>
                </div>
            </div>

        </SCardProduct>
        
    
)
}
