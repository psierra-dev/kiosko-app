import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegisterStore } from '@utils/yup';
import { useForm, SubmitHandler } from "react-hook-form";

import React, { useState } from 'react'
import Input from '../Input/Input';
import { SFormStore } from './style';
import MapBox from '@lib/MapBox/MapBox';

const FormStore = () => {
    const [response, setResponse] = useState({correct: false, error: false, loading: false});
    const [lng, setLng] = useState<number | null>(null)
    const [lat, setLat] = useState<number | null>(null)
    const { register, formState: { errors }, handleSubmit } = useForm<TFormValues>({
        resolver: yupResolver(schemaRegisterStore)
    });

    const onSubmit: SubmitHandler<TFormValues> = async (data) => {
        console.log(data)
        console.log(lng, lat, 'latlng')
        const {Nombre, Apellido, Nombre_Del_Kiosko, Contraseña, Direccion} = data;
        const newStore = {
            name: Nombre,
            lastname: Apellido,
            name_local: Nombre_Del_Kiosko,
            password: Contraseña,
            location: Direccion,
            lat,
            lng
        }

        try {
            
        } catch (error) {
            
        }
    }
    return (
        <SFormStore>
            <form onSubmit={handleSubmit(onSubmit)} className="form-store">
                    <div className="tit">
                        <h2>Crear Tienda</h2>
                    </div>
                    
                    <div className="con-form">
                                <Input 
                                    type='text'
                                    label='Nombre_Del_Kiosko'
                                    register={register}
                                    errors={errors.Nombre_Del_Kiosko}
                                    required
                                    placeholder='Los Sierras'
                                />

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
                                        placeholder='Sierra'
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
                                    type='phone'
                                    label='Telefono'
                                    register={register}
                                    errors={errors.Telefono}
                                    required
                                    placeholder='381XXXXXXX'
                                />
                        
                            {/*<label htmlFor="">Foto de la tienda</label>
                            <div>
                                <div className='con-btn-image'>
                                    {file ? (
                                        <img src={path}
                                        alt= ''
                                        onClick={e =>  {
                                            e.preventDefault()
                                            inputImage.current.click()
                                        }}
                                        />
                                    ): (
                                    <button
                                    className="btn-image"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        inputImage.current.click()
                                    }}>Elegir Foto</button>
                                    )
                                    }
                                </div>
                                </div>*/}

                            {/*<input type="file" name="image" onChange={changeFile} style={{display:"none"}} ref={inputImage} />*/}
                            <div className='con-map'>
                                
                                <MapBox 
                                formLat={setLat} 
                                formLng={setLng}
                                from='formcreate'
                                />

                                {lng === null && lat === null && <p className='msg-map'>Elige una direccion</p>}
                            </div>
                            
                            <Input 
                                    type='text'
                                    label='Direccion'
                                    register={register}
                                    errors={errors.Direccion}
                                    required
                                    placeholder='B san expedito mnz j lote 1'
                                />

                            <Input 
                                    type='password'
                                    label='Contraseña'
                                    register={register}
                                    errors={errors.Contraseña}
                                    required
                                />
                            {response.error && <div>Error al crear store</div>}                            
                            {response.loading ? <div>Cargando</div> : <button type="submit" className='btn-sb'>Crear tienda</button>}
                    </div>
                        
                    
                    
                    
                </form>
        </SFormStore>
    )
}

export default FormStore;
