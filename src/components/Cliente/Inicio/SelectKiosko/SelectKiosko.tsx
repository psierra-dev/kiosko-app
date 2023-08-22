import React from 'react'
import { StyleSelectKiosko } from './style'
import { IoInformation, IoInformationCircle } from 'react-icons/io5'
import { AiTwotoneStar } from 'react-icons/ai'
import background from '@public/backgroundStore2.png'
import Image from 'next/image'

const SelectKiosko = () => {
  return (
    <StyleSelectKiosko >
        <h2>Los Sierras</h2>
        <Image src={background} alt="back" className='img'/>
        <div className='delivery'>
        <IoInformationCircle />
            <p>Con delivery</p>
        </div>

        <div className='calification'>
         <AiTwotoneStar />
         4.7
        </div>

        <p className='open'>Abierto hasta las 22:00</p>
    </StyleSelectKiosko>
  )
}

export default SelectKiosko