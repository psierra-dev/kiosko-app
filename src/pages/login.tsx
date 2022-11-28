import { FormLogin } from '@components/General/FormLogin/FormLogin';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react'

const Login: NextPage = () => {
    return (
        <>
        <Head>
        <title>Loginp</title>
        <meta name="login" content="Login" />
        </Head>
            <FormLogin />
        </>
    )
}

export default Login;
