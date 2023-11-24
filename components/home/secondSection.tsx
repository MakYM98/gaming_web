import AboutCards from "./aboutCards";
import data from './config.json'

const SecondSection = () => {
    return ( 
        <div className="h-full w-full bg-[#f9d84a] flex flex-col items-center">
            <h1 className="text-6xl text-center pt-5">About</h1>
            <div className="w-3/4 mt-5">
                <div className="grid grid-cols-3 px-5 gap-2">
                    {
                        data.about.map(item => (
                            <AboutCards
                                title={item.Title}
                                description={item.Description}
                                button={item.Button}
                                image={item.Image}
                            />
                        ))
                    }
                </div>
            </div>
        </div> 
    );
}
 
export default SecondSection;