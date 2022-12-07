import { useRouter } from 'next/router';
import React from 'react'
import ClienteLayout from './ClienteLayout';
import LoRe from './LoRe';

type Prop = {
    children: React.ReactNode
}

const Layouts = ({children}: Prop) => {
    const router = useRouter()

    if(router.pathname === '/login' || router.pathname === '/register'|| router.pathname === '/register-commerce'){
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
    return (
        <main>
            {children}
        </main>
    )
}

export default Layouts;
