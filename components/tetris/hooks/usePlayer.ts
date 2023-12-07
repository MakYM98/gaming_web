import { useState, useCallback, useEffect } from "react";

import { TETROMINOS,randomTetromino} from './tetrominos'
import { STAGE_WIDTH, checkCollision } from "./gameHelper";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x:0, y:0},
        tetromino: TETROMINOS[0].shape,
        collided: false
    });

    const rotate = (matrix:any, dir:any) => {
        //  Make the rows to become cols (transpose)
        const rotatedTetro = matrix.map((_:any, index:any) => matrix.map((col:any) => col[index]))
        // Reverse each row to get a rotated matrix
        if(dir>0) return rotatedTetro.map((row:any) => row.reverse())
        return rotatedTetro.reverse()
    }

    const playerRotate = (stage:any, dir:any) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir)

        const pos = clonedPlayer.pos.x;
        let offset = 1;

        while(checkCollision(clonedPlayer, stage, {x:0,y:0})){
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0? 1 : -1))
            if(offset > clonedPlayer.tetromino[0].length){
                rotate(clonedPlayer.tetromino, -dir)
                clonedPlayer.pos.x = pos
                return
            }
        }
        setPlayer(clonedPlayer);
    }

    const updatePlayerPos = ({x, y, collided}: { x: number, y: number, collided: boolean }) => {
        setPlayer((prev) => {
            return {
                ...prev,
                pos: { x: (prev.pos.x + x) , y: (prev.pos.y + y)},
                collided:collided
            }
        }
        )
    }

    const resetPlayer = useCallback(()=>{
        setPlayer({
            pos: { x:STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false
        })
    },[])

    useEffect(()=>{console.log(player)},[player])

    return [ player, updatePlayerPos, resetPlayer, playerRotate ] as const
}