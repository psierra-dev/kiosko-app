import { useContext, useEffect, useState } from 'react';
import { countAndAmount } from '../../../service/order';
import { bestProductsStore } from '@service/productstore';
import { CardDashboard } from './components/CardDashboard';
import CardProduct from './components/CardProduct';
import { SDashboard } from './style';
import amountImg from '@public/amount.png'
import soldImg from '@public/sold.png'
import dashboardsvg from '@public/dashboardsvg.svg'
import { CardPays } from './components/CardPays';
import Image from 'next/image';
import { TodoContext } from '@context/context';

type countAmountT = {
    count: number,
    amount: number
}

type bestProductI = {
    sumQuan: number,
    product: TProduct
}

const Dashboard = () => {
    const {todoState} = useContext(TodoContext);
    const {currentUser, mycommerce} = todoState;
    const [state, setState] = useState<string >('Ambos');
    const [countAmount, setCountAmount] = useState<countAmountT | null>(null)
    const [bestProduct, setBestProduct] = useState<bestProductI[] | []>([]);
    
    useEffect(() => {
        ( async () => {
            if(mycommerce){
                try {
                    const res = await countAndAmount(mycommerce?.id as number)
                    setCountAmount(res[0] as countAmountT)
                } catch (error) {
                    console.log(error)
                }
            }
            
            
        })()
        
    }, [mycommerce])

    useEffect(() => {
        ( async () => {
            if(mycommerce){
                try {
            const resp = await bestProductsStore(mycommerce?.id as number)
            setBestProduct(resp)
        } catch (error) {
            console.log(error)
        }
            }
        })()
    }, [mycommerce])

    return (
            <SDashboard>
                <div className='con'>
                    <div className='con1'>
                        <div className='con11'>
                            {currentUser?.name !== undefined ? <><span className='con111'>Hola {currentUser?.name}!!</span>
                            <span className='con112'>Bienvenido a tu panel de control</span></>
                            : <div>Cargando...</div>    
                        }
                        </div>

                        <div className='svg-dash'>
                            <Image src={dashboardsvg} alt="dashboard" />
                        </div>
                    </div>
                    
                    <div className='con21'>
                        
                        <div><h3 className='subtitulos-dh'>Medios de cobro</h3></div>
                        <div className='con22'>
                            <CardPays 
                            type='ef' 
                            state={state}
                            title='Efectivo'
                            />
                            <CardPays 
                            type='mp' 
                            state={state}
                            title='Mercado Pago'
                            />
                            
                            
                        </div>
                    </div>

                    <section className=''>
                        <div className='con21'>
                            <div>
                                <h3 className='subtitulos-dh'>Actividades</h3>
                            </div>

                            <div className='con22'>
                                <CardDashboard
                                    count_amount={countAmount?.count}
                                    title={'Total Ventas'}
                                    imgurl={amountImg}
                                />
                                <CardDashboard 
                                    count_amount={countAmount?.amount}
                                    title={'Total Saldo'}
                                    imgurl={soldImg}
                                />
                            </div>
                        </div>
                    </section>
                {//Lista de productos 
                }
                    <section className='con3'>
                        <div className='con11'>
                            <div>
                                <h3 className='subtitulos-dh'>Productos mas vendidos</h3>
                            </div>

                            <div className='con22'>
                                    {bestProduct?.map((e, i) => <CardProduct key={i} bestProduct={e} index={i}/>)}
                                    
                            </div>
                        </div>
                    </section>
                </div>
            </SDashboard>
    )
}


export default Dashboard;