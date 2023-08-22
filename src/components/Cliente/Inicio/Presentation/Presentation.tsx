
import {  SPresentation } from "./style"
import carrito from '@public/carrito.png'
import Image from "next/image"

export default function Presentation() {
    return (
        <SPresentation>
            <div className='presentacion'>
                <div className='container-eslogan'>
                    <h1>
                    Todo lo que buscas en el dia.
                    </h1>

                    <p>
                    Ahorra 60% en tu primera orden
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
