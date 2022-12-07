import { TodoContext } from '@context/context';
import { Drawer } from '@mui/material';
import { ChipFilter } from '@styles/style';

import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import CardOrder from './components/CardOrder';
import { SOrder } from './style';

const stateOrder = ['Aprobada', 'Pendiente']

const Order = () => {
    const {todoState, setStateDrawer, filterNotication} = useContext(TodoContext)
    const {stateDrawer, orders, allorders} = todoState;
    const [filter, setFilter] = useState({state:'Aprobada'})

    const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
        return;
    }

    setStateDrawer({noti: false, order: false});
    };

    useEffect(() => {
        filterNotication(filter)
    }, [filter])

    return (
        <>
            <Drawer
                anchor='right'
                open={stateDrawer.noti}
                onClose={toggleDrawer( false)}
            >
                <SOrder>
                        <button 
                        className='btn-close'
                        onClick={() => setStateDrawer({noti: false, order: false})}
                        ><AiOutlineClose /></button>
                            
                    <div>
                        <h4>
                            Tus Ordenes
                        </h4>
                    </div>

                    <div className='con-filter'>
                        {stateOrder.map(e => 
                        <ChipFilter 
                            key={e}
                            onClick={() => setFilter({state: e})}
                            backgroundcolor={filter.state === e ? "orange" : null}
                            color={filter.state ===  e ? 'white' : null}
                        > {e}</ChipFilter>)
                        }
                    </div>
                    <div className='con-order'>
                        {orders.map(order => <CardOrder order={order} key={order.id}/>) }
                    </div>

                    {orders.length === 0  && <div>No hay ordenes</div>} 
                </SOrder>
            </Drawer>
        </>
    )
}

export default Order;

