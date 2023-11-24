const tabs = ['Home', 'About', 'Games']

const NavItems = () => {
    return ( 
        <div className="flex items-center justify-center h-full w-full">
            {
                tabs.map(tab => (
                    <div key={tab} className="h-full w-full flex justify-center items-center text-md">
                        {tab}
                    </div>
                ))
            }
        </div>
    );
}
 
export default NavItems;