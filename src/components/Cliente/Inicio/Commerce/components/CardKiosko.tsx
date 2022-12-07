import {SCardKiosko } from "./style";
import { useState } from "react";
import cc from './cardcomercio.module.css';
import Image from "next/image";


interface Prop {
    Comercio: TCommerce;
    Func: (id:number) => void;
    active: number
}
    const CardKiosko = ({Comercio, Func, active}: Prop) => {
        console.log('render')
        console.log(active)
    return (
        <SCardKiosko onClick={() => Func(Comercio.id)} activeColor={active === Comercio.id ? "#ffb331e5" : undefined}>
            <div className="con">
                <div className="conimg">
                    <Image 
                        src={Comercio.imgurl as string}
                        alt='imgurl'
                    />
                </div>

                <div>
                    <span>
                        Tucuman
                    </span>
                        
                    <h5>
                        {Comercio.name}
                    </h5>
                </div>
                
            </div>
        </SCardKiosko>
    )
    }

export default CardKiosko;
