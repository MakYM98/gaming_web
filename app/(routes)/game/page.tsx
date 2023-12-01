"use client"

import { useState } from "react";
import SideNav from "./components/nav/sideNav";
import Tetris from "./components/tetris/tetris";
import TicTacToe from "./components/tictactoe/tictactoe";

const GameHome = () => {
    const [gameSelected, setGameSelected] = useState('Tetris')

    const chooseGame = (game:string) => {
        setGameSelected(game)
    }

    return ( 
        <div className="w-full h-[100vh] flex">
            <SideNav
                chooseGame={chooseGame}
                gameSelected={gameSelected}
            />
            <div className="w-[90%]">
                {
                    gameSelected == "Tetris"?
                        <Tetris/>
                    :
                        gameSelected == "TicTacToe"?
                            <TicTacToe/>
                        :
                            <div className="bg-[#dcdcdc] w-full h-full">

                            </div>
                }
            </div>
        </div>
    );
}
 
export default GameHome;