import colorWheel from '../../assets/img/color-wheel-1.png'
import useScrollAnimate from '../../hooks/useScrollAnimate';

function ColorWheel() {
    const [ref1, isVisible1] = useScrollAnimate();
    const [ref2, isVisible2] = useScrollAnimate();
    const [ref3, isVisible3] = useScrollAnimate();
    const [ref4, isVisible4] = useScrollAnimate();

    return(
        <div className='mx-[8vw] my-16 max-w-fit bg-gray-200/80 backdrop-blur-lg rounded-2xl p-5 lg:mx-auto
                        dark:bg-gray-800/80'>
            <div className='flex flex-wrap justify-center items-center lg:m-7'>
                <div className='sm:my-3 sm:mx-5 lg:max-w-md'>
                    <h1 ref={ref1} className={`${isVisible1 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaBold font-bold text-3xl sm:text-4xl lg:text-5xl`}>The Color Wheel</h1>
                    <div ref={ref2} className={`${isVisible2 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-3/4 max-w-md my-3 bg-gray-900 dark:bg-white`}></div>

                    <p ref={ref3} className={`${isVisible3 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight sm:mx-3 md:text-lg`}>
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
                        <img src={colorWheel} alt="color wheel" ref={ref4} className={`${isVisible3 ? 'animate-fadeIn' : 'opacity-0'} w-full max-w-xs my-5`}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorWheel;