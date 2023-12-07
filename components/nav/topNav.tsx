"use client"
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const TopNav = (props:any) => {
    const router = useRouter()
    const gameList = ['Tetris', 'TicTacToe']

    return ( 
        <div className="w-full h-[10%] flex bg-[#f9d84a] absolute inset-0 z-10 px-20">
            <div className="flex items-center justify-start text-lg w-full">
                <h1 className='text-[#001f3f] text-opacity-80 font-bold text-2xl mr-10'>
                    Yeong Meng
                </h1>
                <div className='gap-5 flex text-[#001f3f] font-semibold text-sm'>
                    <p>Home</p>
                    <p>Games</p>
                </div>
            </div>
            
        </div>
    );
}
 
export default TopNav;