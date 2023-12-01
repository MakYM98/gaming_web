"use client"
import React from 'react'

interface DisplayProps {
    gameOver: any,
    text: string
}

const Display = ({gameOver, text}: DisplayProps) => {
    return ( 
        <div
            className='flex items-center p-[20px] w-full'
            style={{
                boxSizing: 'border-box',
                margin:'0 0 20px 0',
                border: '4px solid #333',
                minHeight: '30px',
                borderRadius:'20px',
                color: `${gameOver? 'red': '#999'}`,
                background: '#000',
                fontSize: '0.8rem'
            }}
        >
            {text}
        </div>
    );
}
 
export default Display;