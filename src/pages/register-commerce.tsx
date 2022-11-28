import FormStore from '@components/General/FormStore/FormStore';
import Head from 'next/head';
import React from 'react'

const RegisterCommerce = () => {
    return (
        <>
        <Head>
            <title>Registrar Kiosko</title>
            <meta name="registrar tienda" content="Registrar tienda" />
        </Head>
            <FormStore />
        </>
    )
}

export default RegisterCommerce;
