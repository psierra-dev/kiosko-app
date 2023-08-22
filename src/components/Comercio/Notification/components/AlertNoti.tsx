import React from 'react'
import { NotiAlertStyle } from './style.an'
import { MdOutlineNotificationsActive } from "react-icons/md";

interface Prop {
    state: string
}
export const AlertNoti = ({state='aprovada'} : Prop) => {
    return (
            <NotiAlertStyle>
                <span className='state-order'>Aprovado</span>
                <p><span><MdOutlineNotificationsActive /></span> Nueva orden</p>
            </NotiAlertStyle>
    )
}
