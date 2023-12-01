"use client"
import { useState } from 'react';
import gameList from '../../data.json'

const SideNav = () => {
    const [gameSelected, setGameSelected] = useState('Tetris')

    return ( 
        <div className="w-[10%] h-full bg-[#f9d84a]">
            <div className="h-[5%] flex items-center justify-center text-xl mb-5">
                <h1>Yeong Meng</h1>
            </div>
            <div className="h-[90%]">
                {
                    gameList.games.map(game => (
                        <div 
                            key={game} 
                            className={`
                                text-lg text-center mb-3 p-2 cursor-pointer

                                ${game == gameSelected? 'bg-black text-white':'bg-[#f9d84a]'}
                            `}
                        >
                                {game}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default SideNav;