import gameList from '../../data.json'

const SideNav = () => {
    return ( 
        <div className="w-[10%] h-full bg-[#f9d84a]">
            <div className="h-[5%]">
                <h1>Yeong Meng</h1>
            </div>
            <div className="h-[90%]">
                {
                    gameList.games.map(game => (
                        <div key={game}>
                            {game}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default SideNav;