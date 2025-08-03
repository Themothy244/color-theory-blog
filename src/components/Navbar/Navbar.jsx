
function Navbar() {
    return(
        <div className="h-auto max-w-xl mx-[10vw] p-2 my-4 rounded-[30px] bg-gray-200 flex flex-wrap items-center justify-between
                        dark:bg-gray-800 dark:text-white
                        sm:mx-auto">
            {/* Logo */}
            <div>
                <img src="./colour-icon.png" alt="logo" className="w-10 mx-2 aspect-square"/>
            </div>

            {/* Hamburger */}
            <div className="h-6 w-6 flex flex-col mx-3 justify-around cursor-pointer relative sm:hidden">
                <div className="w-full h-1 bg-gray-900 rounded-full  dark:bg-gray-400"></div>
                <div className="w-full h-1 bg-gray-900 rounded-full  dark:bg-gray-400"></div>
            </div>

            {/* Navlinks */}
            <div className="flex flex-col basis-full items-center 
                            sm:flex-row sm:basis-0">
                <a href="#" className="m-3">Home</a>
                <a href="#" className="m-3">Basics</a>
                <a href="#" className="m-3">Harmonies</a>
                <a href="#" className="m-3">Emotion</a>
            </div>
        </div>
    );
}

export default Navbar;