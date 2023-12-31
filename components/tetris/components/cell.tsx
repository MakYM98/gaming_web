"use client"
import React from 'react'
import { TETROMINOS } from '../hooks/tetrominos'

interface CellProps {
    type: '0' | 'I' | 'L'| 'J'| 'O'| 'S'| 'T'| 'Z'
}

// rgba(${props => props.color}, 0.8)

const Cell = ({type}:CellProps) => {
    return ( 
        <div 
            className={`w-auto`} 
            style={{
                border: `${type === '0'? '0px solid': '4px solid'}`,
                backgroundColor:`rgba(${TETROMINOS[type].color}, 0.8)`,
                borderBottomColor: `rgba(${TETROMINOS[type].color}, 0.1)`,
                borderRightColor: `rgba(${TETROMINOS[type].color}, 1)`,
                borderTopColor: `rgba(${TETROMINOS[type].color}, 1)`,
                borderLeftColor: `rgba(${TETROMINOS[type].color}, 0.3)`
            }}
        >

        </div>
    );
}
 
export default React.memo(Cell);