import colorWheel from "../../assets/img/color-wheel-1.png";

function HeroSection() {
    return(
        <div className="mt-20 flex flex-wrap justify-center items-center relative">
            <div className="mx-[14vw] mt-4 max-w-md">
                <h1 className="text-[10vw] leading-tight font-helveticaBold font-bold">Understanding Color Theory: A Beginner’s Guide</h1>
            </div>

            <img src={colorWheel} alt="Color Wheel" className="w-4/5 max-w-md m-4"/>
            
            <div className="bg-gray-100/90 backdrop-blur-lg rounded-2xl mt-8 mx-[10vw] p-4 max-w-xl absolute top-2/3
                            dark:bg-gray-800/80">
                <p className="font-helveticaLight">
                    Whether you're a painter, digital artist, designer, or just 
                    getting into the creative world, understanding color theory 
                    is one of the most important foundations of visual art. This 
                    beginner’s guide will walk you through the key concepts so 
                    you can start using color with confidence and intention.
                </p>
            </div>
        </div>
    );
}

export default HeroSection;