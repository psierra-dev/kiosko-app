import { useContext, useEffect, useState } from 'react';

import { CarouselCommerce, SCommerce } from './style';

import { TodoContext } from '@context/context';
import MapBox from '@lib/MapBox/MapBox';
import CardKiosko from './components/CardKiosko';

    const Commerce = () => {
        const {todoState, selectStore, lnglatUser} = useContext(TodoContext);
        const {commerce} = todoState;
        const [active, setActive] = useState<number>(1);

        const [lng, setLng] = useState<number | null>(null)
        const [lat, setLat] = useState<number | null>(null)


        useEffect(() => {
            if(commerce !== undefined) {
                selectStore(commerce[0]?.id)
            }
        }, [commerce])

        const select = (id: number) => {
            setActive(id)
            selectStore(id)
        }

        useEffect(() => {
            if(lng !== null && lat !== null){
                const lnglat = { lng, lat}
                lnglatUser(lnglat)
                sessionStorage.setItem("lnglat", JSON.stringify(lnglat))
            }else {
                console.log('seleccione')
            }
        }, [lng, lat])

        return (
        <SCommerce> 
            <div className='con-mapbox'>
                {lng === null && <p className='aviso-mp' >Marca la ubicacion donde te encuentras</p>}
                <MapBox
                    formLat={setLat}
                    formLng={setLng}
                    from='formcreate'
                />
            </div>

            <div className='con-commerce'>
                <CarouselCommerce>
                { commerce?.length > 0 
                    ? commerce?.map((c) => <CardKiosko Comercio={c} key={c.id} Func={select} active={active}/>)
                    : <div>No hay comercios cerca tuyo</div>
                }
                </CarouselCommerce>
            </div>
        </SCommerce>
        )
    }

export default Commerce;
