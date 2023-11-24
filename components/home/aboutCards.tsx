import Image from "next/image";

interface AboutProps {
    title:string,
    description:string,
    button:string,
    image:string
}

const AboutCards = ({title, description, button, image}:AboutProps) => {
    return ( 
        <div className="w-full border-2 rounded-2xl h-full p-5 text-sm xxl:text-lg flex flex-col">
            <h1 className="text-center text-2xl pb-2">
                {title}
            </h1>
            <Image
                src={require(`../../public/${image}.jpg`)}
                alt={"About Image"}
                className="pb-2 rounded-2xl"
            />
            <div className="text-justify pb-2">
                {description}
            </div>
            {
                button == ""?
                <></>
                :
                <button>
                    {button}
                </button>
            }
        </div>
    );
}
 
export default AboutCards;