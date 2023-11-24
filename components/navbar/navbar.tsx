import NavItems from "./navItems";

const NavBar = () => {
    return ( 
        <div className="w-full h-12 flex justify-center absolute top-5">
            <div className="w-3/4 bg-gray-500/25 rounded-2xl flex">
                {/* Brand Name */}
                <div className="flex items-center h-full text-xl w-1/4 pl-10">
                    Yeong Meng
                </div>
                {/* Nav Items */}
                <div className="w-1/2">
                    <NavItems/>
                </div>
                {/* Play Button */}
                <div className="w-1/4 flex justify-end pr-10 py-1">
                    <button className="h-full bg-yellow-500 text-xl px-5 rounded-xl">
                        Play Now
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;