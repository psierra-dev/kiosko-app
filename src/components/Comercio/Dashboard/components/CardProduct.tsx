import Image from 'next/image'
import React from 'react'
import { SCardProduct } from './style.cp'

type bestProductI = {
    sumQuan: number,
    product: TProduct
}

type Prop = {
    bestProduct: bestProductI,
    index: number
}
const CardProduct = ({bestProduct, index}: Prop ) => {
    return (
            <SCardProduct>
                <div>
                    {`#${index + 1}`}
                </div>
                <div className='cp-img'>
                    <Image src={bestProduct.product.imgurl} alt="product" />
                </div>

                <div>
                    <span>{bestProduct.product.name}</span>
                </div>
            </SCardProduct>
        )
}

export default CardProduct