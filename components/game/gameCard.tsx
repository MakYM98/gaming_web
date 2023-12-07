import Image from "next/image";

interface GameCardProps {
    title:string,
    img:string,
    selectGame: ()=>void
}


const GameCard = ({title, img, selectGame}:GameCardProps) => {
    return (  
        <div className="col-span-1 w-full flex flex-col items-start gap-2">
            <Image
                src={require(`@/public/${img}.png`)}
                alt={title}
                className="w-full rounded-2xl h-full"
            />
            <p className="text-3xl my-3">
                {title}
            </p>
            
            <button 
                className="
                    mt-2 border-[#1a5276] border-2 p-2 rounded-2xl w-1/4
                    hover:bg-[#1a5276] hover:text-white
                "
                onClick={()=>{selectGame()}}
            >
                Play
            </button>
        </div>
    );
}
 
export default GameCard;