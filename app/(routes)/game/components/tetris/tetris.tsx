"use client"
import React, {useState} from 'react'

import Stage from './components/stage'
import Display from './components/display'
import StartBtn from './components/startBtn'

import { usePlayer } from './hooks/usePlayer'
import { useStage } from './hooks/useStage'

import { createStage, checkCollision } from './hooks/gameHelper'


const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer] = usePlayer()
    const [stage, setStage] = useStage(player, resetPlayer)
    
    const movePlayer = (dir:any) => {
        if(!checkCollision(player, stage, {x: dir, y:0})){
            updatePlayerPos({ x: dir, y:0, collided:false })
        }
    }

    const startGame = () => {
        // Reset Everything
        setStage(createStage())
        resetPlayer()
        setGameOver(false)
    }

    const drop = () => {
        if (!checkCollision(player, stage, {x: 0, y:1})){
            updatePlayerPos({x:0, y:1, collided: false})
        }else {
            // Game Over
            if(player.pos.y < 1){
                setGameOver(true);
                setDropTime(null)
            }
            updatePlayerPos({x:0, y:0, collided: true})
        }
    }

    const dropPlayer = () => {
        drop()
    }

    const move = ({keyCode}: {keyCode:any}) => {
        if(!gameOver){
            if(keyCode === 37){
                movePlayer(-1)
            }else if(keyCode === 39){
                movePlayer(1)
            }else if(keyCode === 40){
                dropPlayer()
            }
        }
    }

    return ( 
        <div
            className='bg-white h-screen w-75w overflow-hidden'
            role='button'
            tabIndex={0}
            onKeyDown={(e) => move(e)}
        >
            <div
                className='flex p-[40px] max-w-[900px]'
                style={{
                    alignItems: 'flex-start',
                    margin: '0 auto'
                }}
            >
                <Stage stage={stage}/>
                <aside
                    className='w-full max-w-[200px] block'
                    style={{padding:'0 20px'}}
                >
                    {
                        gameOver? 
                        (
                            <Display gameOver={gameOver} text="Game Over"/>
                        )
                        :
                        (
                            <div>
                                <Display text="Score" gameOver={"Test"}/>
                                <Display text="Rows" gameOver={"Test"}/>
                                <Display text="Level" gameOver={"Test"}/>
                            </div>
                        )
                    }
                    <StartBtn
                        callback={startGame}
                    />
                </aside>
            </div>
        </div>
    );
}
 
export default Tetris;