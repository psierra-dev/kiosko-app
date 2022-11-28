import React, { useState } from 'react'
import { Path, UseFormRegister, FieldErrorsImpl, FieldError, ValidationRule} from "react-hook-form";
import { SInput } from './style';

type InputProps = {
    label: Path<TFormValues>;
    register: UseFormRegister<TFormValues>;
    required: boolean;
    pattern?: ValidationRule<RegExp>
    errors: FieldError | undefined
    type: string
    valueInp?: string,
    placeholder?: string,
};

const Input = ({ label, register, required, errors, type,pattern, valueInp, placeholder }: InputProps) => {

        return (
        <>
            <SInput>
                    <label>{label}</label>
                        {type === 'textarea'
                            ? <textarea {...register(label)} cols={30} rows={10}></textarea> 
                            :<input
                                type={type}
                                {...register(label, {required})}
                                className={errors !== undefined ? "inpactive inpgeneral" : "inp inpgeneral"}
                                
                                placeholder={placeholder}
                                />
                        }       
                
                    {errors !== undefined && <p className='message'>{errors.message}</p>}
            </SInput>
        </>
        )
    };

    export default Input;