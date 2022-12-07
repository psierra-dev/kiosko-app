import Footer from '@components/General/Footer/Footer'
import React from 'react'
import HeaderClient from "../Cliente/Header/Header"
type Prop = {
    children: React.ReactNode
}
const ClienteLayout = ({children}: Prop) => {
    return (
        <>
            <HeaderClient />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default ClienteLayout;