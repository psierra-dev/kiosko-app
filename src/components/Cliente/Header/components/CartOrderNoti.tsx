import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { BiDetail } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { SBadge } from './style.badge';
import { TodoContext } from '@context/context';


interface Prop {
    type: string
}
const CartOrderNoti = ({type}: Prop) => {
    const router = useRouter();
    const {todoState, setStateDrawer} = useContext(TodoContext);
    


    return (
            
                <SBadge>
                    <div className='cart'>
                    { type === 'cart' && <>
                    <div 
                        onClick={() => router.push('/inicio/cart')} 
                        className='carritonoti'>
                            <span className='lenght'>{4}</span>
                    </div>
                    <IoCartOutline />
                    </>}
                    { type === 'order' && <>
                    <div
                        onClick={() => setStateDrawer({noti:true, order:false})}
                        className='carritonoti'>
                            <span className='lenght'>{3}</span>
                    </div>
                    <BiDetail />
                    </>}
                </div>

                {/*  */}
                </SBadge>
    )
}

export default CartOrderNoti;
