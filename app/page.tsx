"use client"

import { useState, useRef, MutableRefObject } from "react";
import Image from "next/image";
import { FaLongArrowAltDown } from "react-icons/fa";
import GameCard from "@/components/game/gameCard";
import GameModal from "@/components/game/gameModal";
import TopNav from "@/components/nav/topNav";

export default function Home() {
    const [startGame, setStartGame] = useState(false)
    const [gameSelected, setGameSelected] = useState('')
    const coverRef = useRef() as MutableRefObject<HTMLDivElement>
    const gameRef = useRef() as MutableRefObject<HTMLDivElement>

    const chooseGame = (game:string) => {
        setGameSelected(game)
        setStartGame(true)
    }

    const closeGame = () => {
        setGameSelected('')
        setStartGame(false)
    }

    const scrollToGame = () => gameRef.current.scrollIntoView()
    const scrollToCover = () => coverRef.current.scrollIntoView()

  return (
    <div className="w-full h-[100vh]  bg-[#f9d84a]">
        <TopNav
            coverScroll={scrollToCover}
            gameScroll={scrollToGame}
        />
        <div className="flex h-full w-full" ref={coverRef}>
            <GameModal
                start={startGame}
                game={gameSelected}
                close={()=>{closeGame()}}
            />
            <div className="w-[60%]">
                <div className="w-[100%] text-[#001f3f] text-2xl h-[100%] p-20 pt-10 flex items-center gap-2">
                    <div className="w-full font-bold text-4xl text-gap">
                        <p className="mb-8">
                            Embark on a Year of Fun: Dive into a World of Simple Yet Engaging Games!
                        </p>
                        <p className="text-xl text-[#001f3f]/60 mb-12">
                            Rediscover the thrill of classic arcade experiences, elegantly brought to life through the dynamic capabilities of JavaScript.
                        </p>
                        <p className="text-xl text-[#001f3f]/80 flex items-center">
                            Start Playing <span className="border-2 rounded-full p-1 ml-2 animate-bounce border-[#001f3f]">
                                <FaLongArrowAltDown
                                    size={15}
                                />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[40%] h-full">
                <Image
                    src={require('@/public/side_panel.png')}
                    alt={"Side Panel"}
                    className="h-full"
                />
            </div>
        </div>
        <div className="flex h-full w-full bg-[#f9d84a] p-5" ref={gameRef}>
            <div className="w-[100%] h-full mt-8 text-xl">
                <p className="mb-5 text-4xl text-center text-[#001f3f]">
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
                    <div className="col-span-1 w-full h-full flex items-center justify-center gap-2">
                        <p>More Coming Soon</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}
