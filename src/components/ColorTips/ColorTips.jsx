import icon from '../../assets/icons/color-palette.svg';
import spectrum from '../../assets/img/color-spectrum.png';
import useScrollAnimate from '../../hooks/useScrollAnimate';

function ColorTips() {
    const [ref1, isVisible1] = useScrollAnimate();
    const [ref2, isVisible2] = useScrollAnimate();
    const [ref3, isVisible3] = useScrollAnimate();
    const [ref4, isVisible4] = useScrollAnimate();

    const [ref5, isVisible5] = useScrollAnimate();
    const [ref6, isVisible6] = useScrollAnimate();
    const [ref7, isVisible7] = useScrollAnimate();
    const [ref8, isVisible8] = useScrollAnimate();


    return(
        <div className='my-40'>
            <div className='text-center'>
                <h3 ref={ref1} className={`${isVisible1 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaLight text-xl`}>Experimenting with</h3>
                <h1 ref={ref2} className={`${isVisible2 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaBold font-bold text-4xl my-2 mx-3`}>Colors: Beginner Tips</h1>
                <div className='flex justify-center items-center'>
                    <div ref={ref3} className={`${isVisible3 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white`}></div>
                    <img src={icon} alt="icon" width={50} className='m-3'/>
                    <div ref={ref3} className={`${isVisible3 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white`}></div>
                </div>
            </div>
            <div className='bg-gray-200/80 dark:bg-gray-800/80 my-4 mx-[8vw] p-6 rounded-2xl flex justify-center items-center flex-col-reverse max-w-4xl md:flex-row md:justify-between lg:mx-auto'>
                <div className='md:w-1/2'>
                    <h1 ref={ref4} className={`${isVisible4 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaBold font-bold text-xl sm:text-2xl`}>Start with limited palettes</h1>
                    <p ref={ref4} className={`${isVisible4 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight mx-3 text-sm sm:text-base`}>Using just 2–3 colors helps you learn control.</p>

                    <h1 ref={ref5} className={`${isVisible5 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaBold font-bold text-xl sm:text-2xl mt-5`}>Play with contrast</h1>
                    <p ref={ref5} className={`${isVisible5 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight mx-3 text-sm sm:text-base`}>Use light vs. dark or warm vs. cool to guide the eye.</p>

                    <h1 ref={ref6} className={`${isVisible6 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaBold font-bold text-xl sm:text-2xl mt-5`}>Observe nature and other artists</h1>
                    <p ref={ref6} className={`${isVisible6 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight mx-3 text-sm sm:text-base`}>Take notes on how they use color.</p>

                    <p ref={ref7} className={`${isVisible7 ? 'animate-fadeUp' : 'opacity-0'} font-helveticaLight mt-5 text-sm sm:text-base`}>Use digital tools like Adobe Color or Coolors.co for color scheme ideas.</p>
                </div>
                <img src={spectrum} alt="color wheel spectrum" ref={ref8} className={`${isVisible8 ? 'animate-fadeIn' : 'opacity-0'} mb-10 w-4/5 md:mb-0 sm:max-w-80 md:w-2/5`}/>
            </div>
        </div>
    );
}

export default ColorTips;