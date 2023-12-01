"use client"
import { useState } from 'react';
import gameList from '../../data.json'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SideNav = (props:any) => {
    const router = useRouter()

    return ( 
        <div className="w-[10%] h-full bg-[#f9d84a]">
            <div className="h-[5%] flex items-center justify-center text-lg mb-5 mt-2">
                <h1>Yeong Meng</h1>
            </div>
            <div className="h-[85%]">
                {
                    gameList.games.map(game => (
                        <div 
                            key={game} 
                            className={`
                                text-md text-center p-3 cursor-pointer
                                hover:bg-[#dcdcdc]
                                ${game == props.gameSelected? 'bg-[#dcdcdc]':'bg-[#f9d84a]'}
                            `}
                            onClick={()=>{props.chooseGame(game)}}
                        >
                                {game}
                        </div>
                    ))
                }
            </div>
            <div 
                className="h-[5%] flex items-center justify-center text-lg mb-5 mt-2 hover:bg-[#dcdcdc] cursor-pointer"
                onClick={()=>{router.push('/')}}    
            >
                    <Image
                        src={require("@/public/back.svg")}
                        alt="Back Arrow"
                        className='mr-3'
                    />
                    <h1>Return</h1>
            </div>
        </div>
    );
}
 
export default SideNav;