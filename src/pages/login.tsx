import { FormLogin } from '@components/General/FormLogin/FormLogin';
import { getLayout } from '@components/Layouts/LoRe';
import Head from 'next/head';
import React from 'react'
import { NextPageWithLayout } from './_app';

const Login: NextPageWithLayout = () => {
    return (
        <>
        <Head>
        <title>Login</title>
        <meta name="login" content="Login" />
        </Head>
            <FormLogin />
        </>
    )
}

Login.getLayout = getLayout
export default Login;
