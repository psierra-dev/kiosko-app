import React from 'react'
import { SHeader } from './style';
import { GoSearch } from "react-icons/go";
import AvatarC from './components/Avatar';
import CartOrderNoti from './components/CartOrderNoti';
import Link from 'next/link';

const HeaderClient = () => {
    return (
            <SHeader>
                <div className='con'>
                <div><Link href="/inicio">Logo</Link></div>
                <div className="coninput">
                    <input type='text' placeholder='Buscar Productos...'/>
                    <button>
                        <div className='search'>
                            <GoSearch />
                        </div>
                    </button>
                </div>

                <nav className="order-cart-noti">
                    {true ? <CartOrderNoti type='cart'/>
                    :<></>
                    }
                    {true ? <CartOrderNoti type='order'/>
                    :<></>
                    }

                    <AvatarC name='Ruben' lastname="Sierra"/>
                </nav>



                {!true ? <div className='btnrorl'>
                    <button className='btnlogin'>Login</button>
                    <button className='btnregister'>Register</button>
                </div>
                :null
                }
            </div>
            </SHeader>
    )
}

export default HeaderClient;