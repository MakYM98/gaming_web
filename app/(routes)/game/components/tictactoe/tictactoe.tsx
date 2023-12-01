"use client"
import circle from "@/public/circle.png"
import cross from "@/public/cross.png"
import Image from "next/image"
import { useState } from "react"

const TicTacToe = () => {
    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    const [data, setData] = useState(["","","","","","","","","",])
    const [winner, setWinner] = useState('')

    const board = [[0,1,2],[3,4,5],[6,7,8]]

    const toggle = (e:any, num:any) => {
        const curBoard = data
        if(lock){
            return 0
        }
        if(count%2 === 0){
            curBoard[num] = 'x'
            setCount(count+1)
        }else{
            curBoard[num] = 'o'
            setCount(count+1)
        }
        setData(curBoard)
        checkWin(curBoard)
    }

    const checkWin = (board:any) => {
        if(board[0] === board[1] && board[1] === board[2] && board[2] !== ''){
            won(board[2])
        }else if(board[3] === board[4] && board[4] === board[5] && board[5] !== ''){
            won(board[5])
        }else if(board[6] === board[7] && board[7] === board[8] && board[8] !== ''){
            won(board[8])
        }else if(board[0] === board[3] && board[3] === board[6] && board[6] !== ''){
            won(board[6])
        }else if(board[1] === board[4] && board[4] === board[7] && board[7] !== ''){
            won(board[7])
        }else if(board[2] === board[5] && board[5] === board[8] && board[8] !== ''){
            won(board[8])
        }else if(board[0] === board[4] && board[4] === board[8] && board[8] !== ''){
            won(board[8])
        }else if(board[2] === board[4] && board[4] === board[6] && board[6] !== ''){
            won(board[6])
        }
    }

    const won = (win:any) => {
        setLock(true)

        if(win === 'x'){
            setWinner('x')
        }else if(win == 'o'){
            setWinner('o')
        }
    }

    const reset = () => {
        setLock(false)
        setData(["","","","","","","","",""])
        setWinner('')
    }

    return (  
        <div className="text-center bg-black h-full flex justify-center items-center">
            <div>
                <div className="pt-[20px] text-2xl text-white flex justify-center items-center flex-col">
                    <h1 className="pb-2">
                        Tic Tac Toe
                    </h1>
                    {
                        winner !== ''?
                            <p className="pb-2 text-[#26ffcb]">
                                Congratulations, {winner} won!
                            </p>
                        :
                            <></>
                    }
                </div>
                {/* Board */}
                <div className="
                    w-[600px] h-[564px] flex m-auto
                ">
                {
                        board.map(row => (
                            <div>
                                {
                                    row.map(box => (
                                        <div 
                                            className="
                                                flex h-[180px] w-[180px] bg-[#1f3540]
                                                border-4 border-solid border-[#0f1b21]
                                                rounded-lg cursor-pointer justify-center
                                                items-center
                                            "
                                            onClick={(e)=>{toggle(e,box)}}
                                        >
                                            {
                                                data[box] == 'o'?
                                                <Image 
                                                    src={require("@/public/circle.png")} 
                                                    alt="Circle"
                                                    className="w-1/2 h-1/2"
                                                />
                                                :
                                                data[box] == 'x'?
                                                <Image 
                                                    src={require("@/public/cross.png")} 
                                                    alt="Circle"
                                                    className="w-1/2 h-1/2"
                                                />
                                                :
                                                <></>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                }
                </div>
                <button className="
                    w-[250px] h-[50px] border-none outline-none cursor-pointer
                    rounded-3xl bg-[#1f3540] text-xl text-[#26ffcb] mt-[25px]
                    mb-[50px]
                "
                    onClick={()=>{reset()}}
                >
                    Reset
                </button>
            </div>
            
        </div>
    );
}
 
export default TicTacToe;