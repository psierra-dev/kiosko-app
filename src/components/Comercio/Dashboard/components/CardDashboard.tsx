import Image from 'next/image'
import React from 'react'
import { SCardDashboard } from './style'

export const CardDashboard = ({count_amount, title, imgurl}: any) => {
    return (
            <SCardDashboard>
                <div className='c-icon'>
                    <Image src={imgurl} alt="" />
                </div>

                <div className='datos-cd'>
                    <p className='title-card'>{title}</p>
                    <span className='valor-tve-ts'>{count_amount}</span>
                </div>
            </SCardDashboard>
    )
}
