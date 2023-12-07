"use client"

import { useState } from "react";
import SideNav from "@/components/nav/sideNav";
import Tetris from "@/components/tetris/tetris";
import TicTacToe from "@/components/tictactoe/tictactoe";
import Image from "next/image";
import { SiTypescript, SiReact, SiTailwindcss  } from "react-icons/si";

export default function Home() {
    const [startGame, setStartGame] = useState(true)
    const [gameSelected, setGameSelected] = useState('')

    const chooseGame = (game:string) => {
        setGameSelected(game)
    }


  return (
    <div className="w-full h-[100vh] flex">
        <>
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
                        <div className="w-[100%] text-black text-2xl h-[100%] bg-[#f9d84a] flex items-center">
                            <div className="w-1/2 font-bold text-4xl text-gap">
                                <p className="mb-8">
                                    Embark on a Year of Fun: Dive into a World of Simple Yet Engaging Games!
                                </p>
                                <p className="text-xl text-black/60">
                                    Rediscover the thrill of classic arcade experiences, elegantly brought to life through the dynamic capabilities of JavaScript.
                                </p>
                                <p className="text-xl text-black/60 mt-8">
                                    Start by selecting a game on your left!
                                </p>
                                <div className="w-[100%] h-2 mt-8 text-xl">
                                    <p className="mb-5 text-sm text-black/60">
                                        Created Through
                                    </p>
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-1 w-full flex items-center gap-2">
                                            <SiTypescript
                                                size={20}
                                            />
                                            TypeScript
                                        </div>
                                        <div className="col-span-1 w-full flex items-center gap-2">
                                            <SiReact
                                                size={20}
                                            />
                                            React
                                        </div>
                                        <div className="col-span-1 w-full flex items-center gap-2">
                                            <SiTailwindcss
                                                size={20}
                                            />
                                            TailwindCSS
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex justify-center overflow-y-hidden">
                                <Image
                                    src={require("@/public/background_edited.jpg")}
                                    alt={"Cover Image"}
                                    className="w-[75%] rounded-2xl"
                                />
                            </div>
                        </div>
                }
            </div>
        </>
  </div>
  )
}
