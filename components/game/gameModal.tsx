"use client"
import { useEffect, useState } from "react";
import Tetris from "../tetris/tetris";
import TicTacToe from "../tictactoe/tictactoe";

interface GameModalProps {
    start: boolean
    game: string
    close: ()=>void
}

const GameModal = ({start, game, close}:GameModalProps) => {
    const [open, setOpen] = useState(false)

    useEffect(()=>{setOpen(start)},[start])
    return (  
        <div className={`relative z-10 ${start? '': 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* Blur out background */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            {/* Content */}
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-y-scroll rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[60%] h-[95%]">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                {
                                    game == 'TicTacToe'?
                                    <TicTacToe/>
                                    :
                                        game == 'Tetris'?
                                        <Tetris/>
                                        :
                                        <></>
                                }
                            </div>
                        </div>
                        {/* Button Area */}
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button 
                                type="button" 
                                className="
                                    inline-flex w-full justify-center rounded-md 
                                    bg-red-600 px-3 py-2 text-sm font-semibold 
                                    text-white shadow-sm hover:bg-red-500 sm:ml-3 
                                    sm:w-auto"
                                onClick={close}
                            >
                                        Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default GameModal;