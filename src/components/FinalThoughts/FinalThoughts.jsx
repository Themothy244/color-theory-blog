import icon from '../../assets/icons/color-palette.svg';
import colorWheel from '../../assets/img/color-wheel-2.png';
import useScrollAnimate from '../../hooks/useScrollAnimate';

function FinalThoughts() {
    const [ref1, isVisible1] = useScrollAnimate();
    const [ref2, isVisible2] = useScrollAnimate();
    const [ref3, isVisible3] = useScrollAnimate();
    const [ref4, isVisible4] = useScrollAnimate();

    return(
        <div className='my-60 relative'>
            <div className='text-center'>
                <h3 ref={ref1} className={`${isVisible1 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaLight text-xl`}>Final Thoughts on</h3>
                <h1 ref={ref2} className={`${isVisible2 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaBold font-bold text-4xl my-2 mx-3`}>Color Theory</h1>
                <div className='flex justify-center items-center'>
                    <div ref={ref3} className={`${isVisible3 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white`}></div>
                    <img src={icon} alt="icon" width={50} className='m-3'/>
                    <div ref={ref3} className={`${isVisible3 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white`}></div>
                </div>
            </div>

            <div className='w-full max-w-sm aspect-square rounded-full overflow-hidden 
                            sm:w-3/4 lg:w-1/3 xl:mx-12 absolute top-1/3 right-1/2 z-0 md:right-[58%]'>
                <img src={colorWheel} alt="color wheel" className='w-full h-full object-cover animate-spinn'/>
            </div>

            <div ref={ref4} className={`${isVisible4 ? 'animate-fadeUp' : 'opacity-0'} bg-gray-200/80 backdrop-blur-lg mx-[8vw] my-5 rounded-2xl p-5 lg:max-w-3xl lg:mx-auto md:p-6
                            dark:bg-gray-800/80`}>
                <p className='font-helveticaLight mb-3 md:text-lg'>
                    Understanding color theory doesn’t mean following 
                    strict rules—it’s about knowing your tools so you 
                    can break the rules with intention. With practice, 
                    you’ll start to choose colors more intuitively and 
                    expressively.
                </p>
                <p className='font-helveticaLight mb-3 md:text-lg'>Next Step: Try creating an artwork using just an 
                    analogous or complementary color scheme!</p>
            </div>
        </div>
    );
}

export default FinalThoughts;