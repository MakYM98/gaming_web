"use client"
import React from 'react'
import Cell from './cell'

interface StageProps {
    stage: any
}

const Stage = ({stage}: StageProps) => {
    return ( 
        <div
            className='grid w-full bg-[#111]'
            style={{
                gridTemplateRows: `repeat(
                    ${stage.length},
                    calc(25vw / ${stage[0].length})
                )`,
                gridTemplateColumns: `repeat(${stage[0].length}, 1fr)`,
                gridGap: '1px',
                border:'2px solid #333',
                maxWidth: '25vw'
            }}
        >
            {
                stage.map((row:any) => row.map((cell:any, x:any) => (
                    <Cell key={x} type={cell[0]}/>
                )))
            }
        </div>
    );
}
 
export default Stage;