import FormStore from '@components/General/FormStore/FormStore';
import Head from 'next/head';
import React from 'react'
import { NextPageWithLayout } from './_app';
import { getLayout } from '@components/Layouts/LoRe';

const RegisterCommerce: NextPageWithLayout = () => {
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

RegisterCommerce.getLayout = getLayout
export default RegisterCommerce;
