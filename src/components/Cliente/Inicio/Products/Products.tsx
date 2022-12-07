import {  useContext, useEffect, useState } from 'react';

import { SProducts } from './style';




import axios from 'axios';
import { TodoContext } from '@context/context';
import { API_BASE_URL } from '@config/config';
import { Text, Wrapper } from '@styles/style';
import { CardProduct } from './components/CardProduct';

    const arrTipo = ["All", 'Verduras', 'Frutas', 'Bebidas', 'Golosinas', 'Otros'];

    const Products = () => {
        const [active, setActive] = useState('All')
        const {todoState, updateTipo, getProductos} = useContext(TodoContext);
        const {store_select} = todoState;
        const {productInfo} = todoState;

        const handlerTipo = (name: string) => {
            updateTipo(name)
            setActive(name)
        }
        useEffect(() => {
            if(store_select){
                const getProductStore = async () => {
                    try {
                        const product = await axios.get(`${API_BASE_URL}/product-store/getproductstore/${store_select}` );
                        console.log(product);
                        getProductos(product.data)
                    } catch (error) {
                        console.log(error)
                    }
                    
                }
    
                getProductStore();
            }
            
        }, [store_select])
        
    return (
            <SProducts >
                
                    <div className='div-row'>
                        <div>
                            <Text size='20px' weight='520' lineheight='20px' color='#253D4E'>  
                                Productos
                            </Text>
                        </div>
                        <div className="filt">
                            {arrTipo.map(e => 
                            <Text 
                            key={e}
                            onClick= {() => handlerTipo(e)}
                            color={active === e ? 'orange' : '#253D4E'}
                            size='14px' 
                            weight='400' 
                            lineheight='20px' 
                            cursor='pointer'>
                                {e}
                            </Text>)}

                        </div>
                    </div>
                <Wrapper >
                    {productInfo.length > 0 ?productInfo?.map(p => <CardProduct key={p.id} product={p}/>) : <h2>No hay productos</h2>}
                </Wrapper>
            </SProducts>
        
    )
}

export default Products;
