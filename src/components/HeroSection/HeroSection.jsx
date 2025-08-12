import colorWheel from "../../assets/img/color-wheel-1.png";

function HeroSection() {
    return(
        <div className="mt-20 flex flex-wrap justify-center items-center relative xl:mt-28">
            <div className="mx-[12vw] mt-4 max-w-md sm:max-w-lg sm:my-6 lg:mx-6 lg:max-w-md xl:mx-12 xl:max-w-lg">
                <h1 className="text-[clamp(1rem,11vw,56px)] leading-tight font-helveticaBold font-bold 
                                sm:text-5xl sm:text-center md:text-5xl lg:text-6xl lg:text-left xl:text-7xl">Understanding Color Theory: A Beginner’s Guide</h1>
            </div>
            <div className="w-4/5 max-w-md aspect-square rounded-full overflow-hidden m-4 sm:w-3/4 lg:w-1/3 xl:mx-12">
                <img src={colorWheel} alt="Color Wheel" className="w-full h-full object-cover animate-spinn"/>
            </div>
            <div className="bg-gray-100/90 backdrop-blur-lg rounded-2xl mt-8 mx-[10vw] p-4 max-w-lg absolute top-2/3 lg:top-3/4 lg:max-w-2xl xl:top-[80%]
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