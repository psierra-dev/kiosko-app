
import {  SPresentation } from "./style"
import carrito from '@public/carrito.png'
import Image from "next/image"

export default function Presentation() {
    return (
        <SPresentation>
            <div className='presentacion'>
                <div className='Eslogan'>
                    <p>
                    Todo lo que buscas en el dia.
                    </p>
                </div>

                <div className='pngcarrito'>
                        <Image 
                            src={carrito}
                            alt='carrito'
                            />
                </div>
            </div>
        </SPresentation>
    )
}
