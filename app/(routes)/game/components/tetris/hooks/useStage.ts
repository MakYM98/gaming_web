import { useState, useEffect } from "react";

import {createStage} from './gameHelper'

export const useStage = (player:any, resetPlayer:any) => {
    const [stage, setStage] = useState(createStage())

    useEffect(()=>{
        const updateStage = (prevStage:any) => {
            // First flush the stage
            const newStage = prevStage.map((row:any) => 
                row.map( (cell:any) => (cell[1] === 'clear'? [0, 'clear']:cell))
            )

            // Draw Tetromino
            player.tetromino.forEach((row:any, y:any) => {
                row.forEach((value:any, x:any) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided? 'merged': 'clear'}`
                        ]
                    }
                })
            })

            if(player.collided){
                resetPlayer()
            }

            return newStage
        }

        setStage(prev => updateStage(prev))

    },[player])

    return [stage, setStage] as const
}