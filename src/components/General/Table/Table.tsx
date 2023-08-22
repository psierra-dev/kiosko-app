import React from 'react'
import { TableStyle } from './style'

const Table = ({children, ndecolumn}) => {
    return (
        <TableStyle
            ndecolumna={ndecolumn}
        >
            {children}
        </TableStyle>
    )
}

export default Table