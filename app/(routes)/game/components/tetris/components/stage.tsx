"use client"
import React from 'react'
import Cell from './cell'

interface StageProps {
    stage: any
}

const Stage = ({stage}: StageProps) => {
    return ( 
        <div>
            {
                stage.map((row:any) => row.map((cell:any, x:any) => (
                    <Cell key={x} type={cell[0]}/>
                )))
            }
        </div>
    );
}
 
export default Stage;