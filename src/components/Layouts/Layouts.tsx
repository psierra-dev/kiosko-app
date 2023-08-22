import { useRouter } from 'next/router';
import React from 'react'
import ClienteLayout from './ClienteLayout';
import ComercioLayout from './ComercioLayout';
import LoRe from './LoRe';

type Prop = {
    children: React.ReactNode
}

const routesCommerce = ['/comercio', '/comercio/editar', '/comercio/configuracion', '/comercio/configuracion/perfil']
const Layouts = ({children}: Prop) => {
    const router = useRouter()

    if(router.pathname === '/login' || router.pathname === '/register'|| router.pathname === '/registercommerce'){
        return (
            <>
                <LoRe >
                    {children}
                </LoRe>
            </>
        )
    }
    if(router.pathname === '/inicio' || router.pathname === '/inicio/cart'){
        return (
            <ClienteLayout>
                {children}
            </ClienteLayout>
        )
    }

    if(routesCommerce.includes(router.pathname)){
        return (
            <ComercioLayout>
                {children}
            </ComercioLayout>
        )
    }
    return (
        <main>
            {children}
        </main>
    )
}

export default Layouts;
