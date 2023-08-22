import Image from 'next/image';
import React from 'react'
import { SCardOrder } from './style';


/*const order = {
    store: {
        name: 'Los Sierra',
        imgurl: ''
    },
    products: [
        {name: 'Vodka', quantity: 2, u: 'uni'},
        {name: 'Quilme', quantity: 1, u: 'uni'},
        {name: 'Pan', quantity: 1,u: 'kg'},
    ],
    total: 2000,
    state: 'Aprobada',
    typePayment: 'Efectivo',
    fecha: '12/10/24',
    norder: '242432'
}*/

type Prop = {
    order: TOrder
}

const CardOrder = ({order}: Prop) => {
    return (
            <SCardOrder >
                <div className='con-card'>

                    <div className='img-infoorder'>
                        <div className='img'>
                            
                        </div>

                        <div className='infoorder'>
                            <h6>{order.store.name}</h6>
                            <div className='fecha-pay'>
                                <p className='text-sec'></p>
                                <p className='text-sec'>Pago en {order.type_payment}</p>
                            </div>

                            <p className='text-sec'>N° de orden: {order.id.slice(11,15)}</p>
                        </div>
                    </div>

                    <div className='product'>
                        <h6>Productos</h6>
                        <ul>
                            {order.detailorders.map(e=> 
                            <li
                                key={e.id}
                            >
                                <p className='text-sec'>
                                    <span className='quant'>
                                        {e.quantity}
                                    </span>

                                        {e.product.name}
                                </p>
                            </li>)}
                        </ul>
                    </div>
                </div>

                <span className='state'>
                    {order.state}
                </span>
            </SCardOrder>
    )
}

export default CardOrder;