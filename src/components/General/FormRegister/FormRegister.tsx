import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegister } from '@utils/yup';
import React from 'react'
import { SLoginRegister } from '../FormLogin/style';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../Input/Input';
import axios from 'axios';
import Link from 'next/link';

const FormRegister = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<TFormValues>({
        resolver: yupResolver(schemaRegister)
    });

    const onSubmit: SubmitHandler<TFormValues> = async (data) => {
        console.log('onSubmit: ', data)
        const obj = {
            name: data.Nombre,
            lastname: data.Apellido,
            email: data.Email,
            password: data.Contraseña
        }

        try {
            const response =  await axios.post("http://localhost:3001/user/register", obj)
            console.log(response)
            
        } catch (error) {
            console.error('Error de login: ', error)
        }
    }
    
    return (
            <SLoginRegister>
                <div className='con-lr'>
                        <div >
                        <h2>Register Cliente</h2>
                        </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                                <Input 
                                    type='text'
                                    label='Nombre'
                                    register={register}
                                    errors={errors.Nombre}
                                    required
                                    placeholder='Juan'
                                />
        
                                <Input 
                                        type='text'
                                        label='Apellido'
                                        register={register}
                                        errors={errors.Apellido}
                                        required
                                        placeholder='Juan'
                                />

                                <Input 
                                    type='mail'
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
                                <button type="submit">Registrar</button>
                            </div>
                    </form>
                        <div>
                                <p>Ya tienes una cuenta? <Link href='/login'>Login</Link></p>
                            </div>
                        <div>
                    </div>
                </div>
            </SLoginRegister>
    )
}

export default FormRegister;