"use client"
import React from 'react'

interface CellProps {
    type:any
}

const Cell = ({type}:CellProps) => {
    return ( 
        <div className='text-black'>
            {type}
        </div>
    );
}
 
export default Cell;