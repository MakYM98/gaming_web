"use client"
import React from 'react'

import Stage from './components/stage'
import Display from './components/display'
import StartBtn from './components/startBtn'
import { createStage } from './hooks/gameHelper'


const Tetris = () => {
    return ( 
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text="Score" gameOver={"Test"}/>
                    <Display text="Rows" gameOver={"Test"}/>
                    <Display text="Level" gameOver={"Test"}/>
                </div>
                <StartBtn
                    callback={"test"}
                />
            </aside>
        </div>
    );
}
 
export default Tetris;