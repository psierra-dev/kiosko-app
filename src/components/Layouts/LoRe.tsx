import { useRouter } from 'next/router';
import React from 'react'
import { SLoReLayout } from './style.lore';
import preciopng from '@public/preciopng.png'
import Image from 'next/image';

type Prop = {
    children: React.ReactNode
}
const LoRe = ({children}: Prop) => {
    const router = useRouter()
    return (
            <SLoReLayout>
                <section className='con'>
                        <div className='img-rl'></div>

                        <div className='con1'>
                            <div className='con11'>
                                <figure className='con1-figure'>    
                                </figure>

                                {router.pathname !== "/register-commerce" && (
                                <button
                                    className="btn-cs"
                                    onClick={() => {
                                        console.log('bt')
                                        router.push('/register-commerce')
                                            }}
                                    >Crear tienda</button>)
                                }
                            </div>
                            
                            <div className='con12'>
                                <div className='con123'>
                                    <div className="con124">
                                        <h2>
                                            Todo lo que buscas en el día
                                        </h2>

                                        <h3>
                                            Encuentre el producto de tu kiosko favorito
                                        </h3>
                                    </div>
                                </div>
                                

                                <div className='con124-form'>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='con0'>
                        <div className='con01'>
                            <div className='con011'>
                                <div className="con011-card">
                                    <div className='-card-img'>
                                        <Image 
                                            src={preciopng}
                                            alt='preciopng'
                                        />
                                    </div>
                                    <div className='con-text'>
                                            <h4 className='-con-text1'>
                                                Los mejores precios
                                            </h4>
                                            <h5 className='-con-text2'>
                                                Precios muy accesible para todas las gentess
                                            </h5>
                                    </div>
                                    
                                </div>
                                <div className="con011-card">
                                    <div className='-card-img'>
                                    <Image 
                                            src={preciopng}
                                            alt='preciopng'
                                        />
                                    </div>
                                    <div className='con-text'>
                                            <h4 className='-con-text1'>
                                                Los mejores precios
                                            </h4>
                                            <h5 className='-con-text2'>
                                                Precios muy accesible para todas las gentess
                                            </h5>
                                    </div>
                                    
                                </div>
                                <div className="con011-card">
                                    <div className='-card-img'>
                                    <Image 
                                            src={preciopng}
                                            alt='preciopng'
                                        />
                                    </div>
                                    <div className='con-text'>
                                            <h4 className='-con-text1'>
                                                Los mejores precios
                                            </h4>
                                            <h5 className='-con-text2'>
                                                Precios muy accesible para todas las gentess
                                            </h5>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
            </SLoReLayout>
    )
}

export default LoRe;