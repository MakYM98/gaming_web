"use client"
import React from 'react'

import Stage from './components/stage'
import Display from './components/display'
import StartBtn from './components/startBtn'
import { createStage } from './hooks/gameHelper'


const Tetris = () => {
    return ( 
        <div
            className='bg-white h-screen w-screen overflow-hidden'
        >
            <div
                className='flex p-[40px] max-w-[900px]'
                style={{
                    alignItems: 'flex-start',
                    margin: '0 auto'
                }}
            >
                <Stage stage={createStage()}/>
                <aside
                    className='w-full max-w-[200px] block'
                    style={{padding:'0 20px'}}
                >
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
        </div>
    );
}
 
export default Tetris;