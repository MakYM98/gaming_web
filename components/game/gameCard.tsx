import Image from "next/image";

interface GameCardProps {
    title:string,
    img:string,
    selectGame: ()=>void
}


const GameCard = ({title, img, selectGame}:GameCardProps) => {
    return (  
        <div className="col-span-1 w-full flex flex-col items-center gap-2 border-2 p-5 pt-3 border-[#808080] rounded-2xl">
            <p className="text-xl">
                {title}
            </p>
            <Image
                src={require(`@/public/${img}.png`)}
                alt={title}
                className="w-3/4"
            />
            
            <button 
                className="
                    mt-2 border-[#1a5276] border-2 p-2 rounded-2xl w-1/2
                    hover:bg-[#1a5276] hover:text-white
                "
                onClick={()=>{selectGame()}}
            >
                Play Now
            </button>
        </div>
    );
}
 
export default GameCard;