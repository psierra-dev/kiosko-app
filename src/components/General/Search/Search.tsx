import { TodoContext } from '@context/context'
import React, { useContext, useEffect, useState } from 'react'
import { SeachStyle } from './style'

export const Search = ({type}: {type:string}) => {
    const [text, setText] = useState('')
    const {searchProduct} = useContext(TodoContext)
    console.log(text, 'a')
    useEffect(() =>  {
        console.log('search')
    }, [])
    const handleSearch = () => {
        searchProduct(text, type)
    }
    return (
            <SeachStyle>
                <input 
                type="text"
                onChange={e => setText(e.target.value)}
                className='search-inp'
                placeholder='Buscar productos'
                />
                <button
                className='search-btn' 
                onClick={handleSearch}
                >Search</button>
            </SeachStyle>
            
    )
}
