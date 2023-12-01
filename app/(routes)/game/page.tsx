import SideNav from "./components/nav/sideNav";
import Tetris from "./components/tetris/tetris";
import TicTacToe from "./components/tictactoe/tictactoe";

const GameHome = () => {
    

    return ( 
        <div className="w-full h-[100vh] flex">
            <SideNav/>
            <div className="w-[90%]">
                {/* <Tetris/> */}
                <TicTacToe/>
            </div>
        </div>
    );
}
 
export default GameHome;