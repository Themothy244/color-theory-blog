import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
    return(
        <div className="h-auto max-w-xl mx-[10vw] p-2 my-4 rounded-[30px] bg-gray-200/80 backdrop-blur-md flex flex-wrap items-center justify-between fixed top-0 left-0 right-0 z-50
                        dark:bg-gray-800/80 dark:text-white
                        sm:mx-auto">
            {/* Logo */}
            <div>
                <img src="./colour-icon.png" alt="logo" className="w-10 mx-2 aspect-square"/>
            </div>

            {/* Hamburger */}
            <div className="h-6 w-6 flex flex-col mx-3 justify-around cursor-pointer relative sm:hidden"  onClick={toggleMenu}>
                <div className={`w-full h-1 bg-gray-900 rounded-full transition-transform duration-300 dark:bg-gray-400
                                ${isOpen ? "rotate-45 absolute top-2" : ""}`}></div>
                <div className={`w-full h-1 bg-gray-900 rounded-full transition-transform duration-300 dark:bg-gray-400
                                ${isOpen ? "-rotate-45 absolute top-2" : ""}`}></div>
            </div>

            {/* Navlinks */}
            <div className={`flex flex-col basis-full items-center max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out text-black dark:text-white
                            ${isOpen ? "max-h-96" : "max-h-0"}
                            sm:flex-row sm:basis-0 sm:overflow-visible`}>
                <a href="#" className="m-3 font-helveticaLight">Home</a>
                <a href="#" className="m-3 font-helveticaLight">Basics</a>
                <a href="#" className="m-3 font-helveticaLight">Harmonies</a>
                <a href="#" className="m-3 font-helveticaLight">Emotion</a>
            </div>
        </div>
    );
}

export default Navbar;