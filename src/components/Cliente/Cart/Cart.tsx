import { TodoContext } from '@context/context';
import { useCart } from '@hooks/useCart';
import { Button, Text } from '@styles/style';
import React, { useContext } from 'react';
import CardCart from './components/CardCart';
import ProcesOrder from './components/ProcesOrder/ProcesOrder';
import {SCart} from './style'

const Cart = () => {
    const {active,total, handleStore} = useCart()    
    const {todoState, setStateDrawer} = useContext(TodoContext);
    const {productsCart, storeCart, productCartStore} = todoState;
    return (
        
        <SCart>
        <div>
        <div>
            Carrito
        </div>

        <div>

            {storeCart?.map(e =>  
                <Text
                onClick= {() => handleStore(e)}
                    color={active?.id === e.id ? 'orange' : '#253D4E'}
                    size='14px' 
                    weight='400' 
                    lineheight='20px' 
                    cursor='pointer'
                    key={e.id}
                >
                    {e.name}
                </Text>
            )}
            
        </div>
        <div>
            {productCartStore.map((e) => <CardCart product={e} key={e.id}/>)}
        </div>

            <div className='con-pago'>
                <div className='con-pago1'>
                    <div className='total'>
                        <p className='text-total'>Total</p>
                        <span className='text-total'>${total}</span>
                    </div>
                    
                        <Button 
                            width='100%' 
                            height='2.5em' 
                            colortext='#ffffff' 
                            onClick={() => setStateDrawer({noti: false, order: true})}
                        >
                            Procesar
                        </Button>
                </div>
            </div>
        </div>
    <ProcesOrder 
        store={active }
        amount={total}
        productsCart={productsCart}
    />
    
    </SCart>
    )
}

export default Cart