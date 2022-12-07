import React, {useRef, useState} from 'react'
import Input from '../Input/Input'
import { SLoginRegister } from './style'
import {schemaLogin} from '@utils/yup'

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { postLogin } from 'service/user';
import { useRouter } from 'next/router';
export const FormLogin = () => {
    const router = useRouter()
    const { register, formState: { errors }, handleSubmit } = useForm<TFormValues>({
        resolver: yupResolver(schemaLogin)
    });

    const [state, setState] = useState({
        loading: false,
        ok: false,
        error: {state: false, msg: ''}
    })
    const btnRef = useRef<HTMLButtonElement >(null)

    const onSubmit: SubmitHandler<TFormValues> = async (data) => {
        const credentials = {
            email: data.Email,
            password: data.Contraseña
        }
        
        const response = await postLogin(credentials)

        if(response.status !== 200){
            console.log(response)
        }

        document.cookie = `token=${response.data}`
        router.reload()
    }

    return (
        <SLoginRegister>
            <div className='con-lr'>
                        <div>
                            <h2 className="">Login</h2>
                        </div>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                                <Input 
                                    type='email'
                                    label='Email'
                                    register={register}
                                    errors={errors.Email}
                                    required
                                    placeholder='kiosko@gmail.com'
                                />
                            
                                <Input 
                                        type='password'
                                        label='Contraseña'
                                        register={register}
                                        errors={errors.Contraseña}
                                        required
                                />

                                <div className='div-btn'>
                                    <button
                                    ref={btnRef} 
                                    type="submit"
                                    
                                    >{state.loading ? "Cargando..." : "Login"}</button>
                                    {state.error.state && <p className='msg-error'>{state?.error?.msg}</p>}
                                </div>
                        </form>

                        <div>
                            <p>No tenes una cuenta? <Link href='/register'>Sign up</Link></p>
                        </div>
                    </div>
        </SLoginRegister>
    )
}
