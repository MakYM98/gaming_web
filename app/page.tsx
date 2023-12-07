"use client"

import { useState } from "react";
import SideNav from "@/components/nav/sideNav";
import Tetris from "@/components/tetris/tetris";
import TicTacToe from "@/components/tictactoe/tictactoe";
import Image from "next/image";
import { SiTypescript, SiReact, SiTailwindcss,SiNextdotjs   } from "react-icons/si";
import GameCard from "@/components/game/gameCard";
import GameModal from "@/components/game/gameModal";

export default function Home() {
    const [startGame, setStartGame] = useState(false)
    const [gameSelected, setGameSelected] = useState('')

    const chooseGame = (game:string) => {
        setGameSelected(game)
        setStartGame(true)
    }

    const closeGame = () => {
        setGameSelected('')
        setStartGame(false)
    }


  return (
    <div className="w-full h-[100vh] flex">
        <>
            <GameModal
                start={startGame}
                game={gameSelected}
                close={()=>{closeGame()}}
            />
            <div className="w-full bg-[#f9d84a]">
                <div className="w-[100%] text-black text-2xl h-[100%] p-20 pt-10 flex items-start gap-2">
                    <div className="w-full font-bold text-4xl text-gap">
                        <p className="mb-8">
                            Embark on a Year of Fun: Dive into a World of Simple Yet Engaging Games!
                        </p>
                        <p className="text-xl text-black/60">
                            Rediscover the thrill of classic arcade experiences, elegantly brought to life through the dynamic capabilities of JavaScript.
                        </p>
                        <div className="w-[60%] mt-8 text-xl h-full">
                            <p className="mb-5 text-sm text-black/60">
                                Created Through
                            </p>
                            <div className="grid grid-cols-4">
                                <div className="col-span-1 w-full flex items-center gap-2">
                                    <SiTypescript
                                        size={20}
                                    />
                                    TypeScript
                                </div>
                                <div className="col-span-1 w-full flex items-center gap-2">
                                    <SiTailwindcss
                                        size={20}
                                    />
                                    TailwindCSS
                                </div>
                                <div className="col-span-1 w-full flex items-center gap-2">
                                    <SiNextdotjs
                                        size={20}
                                    />
                                    NextJS
                                </div>
                                <div className="col-span-1 w-full flex items-center gap-2">
                                    <SiReact
                                        size={20}
                                    />
                                    React
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] h-1/2 mt-8 text-xl">
                            <p className="mb-5 text-sm text-black/60">
                                Choose a Game here
                            </p>
                            <div className="grid grid-cols-3 gap-2 h-1/2">
                                <GameCard
                                    img={'tetris'}
                                    title={'Tetris'}
                                    selectGame={()=>{chooseGame('Tetris')}}
                                />
                                <GameCard
                                    img={'tictactoe'}
                                    title={'Tic Tac Toe'}
                                    selectGame={()=>{chooseGame('TicTacToe')}}
                                />
                                <div className="col-span-1 w-full flex justify-center items-center gap-2 border-2 p-5 pt-3 border-[#1a5276] rounded-2xl">
                                    <p>More Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  </div>
  )
}
