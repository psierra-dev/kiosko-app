import React from 'react'
import {SCardDashboard} from './style'
interface Prop {
    type: "mp" | "ef",
    state: string
    title: string
}

export const CardPays = ({type, state='efectivo', title} : Prop) => {
    return (
            <SCardDashboard>
                    <div className='c-icon'>
                        
                    </div>

                    <div className='datos-cd'>
                        <p className='title-card'>{title}</p>
                    </div>

                    <div className='state'>
                        {type === 'ef' && <span className='activado'>*Activado</span>}
                        {type === 'mp' && state=== 'Ambos' && <span className='activado'>*Activado</span>}
                        {type === 'mp' && state=== 'Ef' && <span className='desactivado'>Desactivado</span>}
                    </div>
            </SCardDashboard>
    )
}
