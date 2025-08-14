import colorWheel from '../../assets/img/color-wheel-1.png'

function ColorWheel() {
    return(
        <div className='mx-[8vw] my-16 max-w-fit bg-gray-200/80 backdrop-blur-lg rounded-2xl p-5 lg:mx-auto
                        dark:bg-gray-800/80'>
            <div className='flex flex-wrap justify-center items-center lg:m-7'>
                <div className='sm:my-3 sm:mx-5 lg:max-w-md'>
                    <h1 className='font-helveticaBold font-bold text-3xl sm:text-4xl lg:text-5xl'>The Color Wheel</h1>
                    <div className='h-[1.5px] w-3/4 max-w-md my-3 bg-gray-900 dark:bg-white'></div>

                    <p className='font-helveticaLight sm:mx-3 md:text-lg'>
                        The color wheel is a circular chart that shows how 
                        colors relate to one another. It includes primary, 
                        secondary, and tertiary colors, helping you understand 
                        color harmony and contrast. Artists and designers use it 
                        to choose color combinations that work well together, 
                        whether for creating balance, contrast, or visual interest.
                    </p>
                </div>
                <div>
                    <div>
                        <img src={colorWheel} alt="color wheel" className='w-full max-w-xs my-5'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorWheel;