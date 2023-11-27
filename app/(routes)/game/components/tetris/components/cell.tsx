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
                backgroundColor:`rgba(${TETROMINOS['L'].color}, 0.8)`,
                borderBottomColor: `rgba(${TETROMINOS['L'].color}, 0.1)`,
                borderRightColor: `rgba(${TETROMINOS['L'].color}, 1)`,
                borderTopColor: `rgba(${TETROMINOS['L'].color}, 1)`,
                borderLeftColor: `rgba(${TETROMINOS['L'].color}, 0.3)`
            }}
        >
                cell
        </div>
    );
}
 
export default Cell;