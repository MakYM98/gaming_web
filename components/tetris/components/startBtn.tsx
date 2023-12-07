"use client"
import React from 'react'

interface StartBtnProps {
    callback: any
}

const StartBtn = ({callback}: StartBtnProps) => {
    return ( 
        <div
            className='p-[20px] w-full'
            style={{
                boxSizing:'border-box',
                margin:'0 0 20px 0',
                minHeight:'30px',
                borderRadius:'20px',
                border:'none',
                color:'white',
                backgroundColor:'#333',
                fontSize:'1rem',
                cursor:'pointer',
                outline:'none'
            }}
            onClick={callback}
        >
            Start Game
        </div>
    );
}
 
export default StartBtn;