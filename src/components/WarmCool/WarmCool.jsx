import colorWheel from '../../assets/icons/color-wheel.svg';
import coolColor from '../../assets/img/cool-colors.png';
import warmColor from '../../assets/img/warm-colors.png';
import useScrollAnimate from '../../hooks/useScrollAnimate';

function WarmCool() {
    const [ref1, isVisible1] = useScrollAnimate();
    const [ref2, isVisible2] = useScrollAnimate();
    const [ref3, isVisible3] = useScrollAnimate();
    
    const [ref4, isVisible4] = useScrollAnimate();
    const [ref5, isVisible5] = useScrollAnimate();
    const [ref6, isVisible6] = useScrollAnimate();
    
    const [ref7, isVisible7] = useScrollAnimate();
    const [ref8, isVisible8] = useScrollAnimate();
    const [ref9, isVisible9] = useScrollAnimate();

    return(
        <div className='my-20'>
            <div className="text-center my-5">
                <img src={colorWheel} width={50} className='mx-auto my-3'/>
                <h3 ref={ref1} className={`${isVisible1 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaLight text-lg`}>Warm vs Cool</h3>
                <div className="flex justify-center items-center">
                    <div ref={ref2} className={`${isVisible2 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-1/5 sm:w-1/4 max-w-md bg-gray-900 dark:bg-white`}></div>
                    <h1 ref={ref3} className={`${isVisible3 ? 'animate-fadeUpDelay' : 'opacity-0'} font-helveticaBold font-bold mx-4 my-2 text-5xl`}>Colors</h1>
                    <div ref={ref2} className={`${isVisible2 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-1/5 sm:w-1/4 max-w-md bg-gray-900 dark:bg-white`}></div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center mx-[8vw] lg:mx-auto'>
                <div className='basis-full bg-gray-200/80 backdrop-blur-lg rounded-2xl p-5 my-2 flex flex-wrap justify-between items-center
                                lg:basis-2/5 lg:max-w-lg lg:mx-2 lg:flex-nowrap dark:bg-gray-800/80'>
                    <div className='mx-4'>
                        <h1 ref={ref4} className={`${isVisible4 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaBold font-bold text-3xl sm:text-5xl`}>Warm Colors</h1>
                        <p ref={ref5} className={`${isVisible5 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight text-md sm:text-lg mx-4`}>Ex. Red, orange, yellow</p>
                        <p ref={ref5} className={`${isVisible5 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight text-md sm:text-lg mx-4`}>Energetic, passionate, attention-grabbing</p>

                    </div>
                    <img src={warmColor} ref={ref6} className={`${isVisible6 ? 'animate-fadeIn' : 'opacity-0'} max-w-40 ml-auto`} alt="Warm colors"/>
                </div>
                <div className='basis-full bg-gray-200/80 backdrop-blur-lg rounded-2xl p-5 my-2 flex flex-wrap justify-between items-center text-right flex-row-reverse 
                                lg:basis-2/5 lg:max-w-lg lg:mx-2 lg:flex-nowrap dark:bg-gray-800/80'>
                    <div className='sm:mx-4'>
                        <h1 ref={ref7} className={`${isVisible7 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaBold font-bold text-3xl sm:text-5xl`}>Cool Colors</h1>
                        <p ref={ref8} className={`${isVisible8 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight text-md sm:text-lg mx-4`}>Ex. Blue, green, purple</p>
                        <p ref={ref8} className={`${isVisible8 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight text-md sm:text-lg mx-4`}>Calm, soothing, introspective</p>
                    </div>
                    <img ref={ref9} src={coolColor} className={`${isVisible9 ? 'animate-fadeIn' : 'opacity-0'} max-w-40 mr-auto`} alt="Cool colors"/>
                </div>
            </div>
        </div>
    );
}

export default WarmCool;