import colorWheel from '../../assets/icons/color-wheel.svg';
import complimentary from '../../assets/img/Complimentary-wheel.png';
import analogous from '../../assets/img/Analogous-wheel.png';
import triadic from '../../assets/img/Triadic-wheel.png';
import complimentaryBg from '../../assets/img/complementary-color-bg.jpg';
import analogousBg from '../../assets/img/analogous-color-bg.jpeg';
import triadicBg from '../../assets/img/triadic-color-bg.jpg';

import { useEffect, useState, useRef } from "react";

function ColorCombination() {
    const [currentStep, setCurrentStep] = useState(0);
    const scrollerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const vh = window.innerHeight;
        const scrollTop = window.scrollY - scroller.offsetTop;

        if (scrollTop >= 0 && scrollTop <= scroller.offsetHeight) {
            const stepIndex = Math.floor(scrollTop / (2 * vh));
            setCurrentStep(stepIndex);
        }
        };

        // Set initial step on load
        setCurrentStep(0);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return(
        <div className='my-40'>
            <div className='text-center my-10'>
                <h1 className='font-helveticaBold font-bold text-4xl'>Color Harmonies</h1>
                <h3 className='font-helveticaLight'>What works together</h3>
                <div className='flex justify-center items-center'>
                    <div className='h-[1.5px] w-1/3 max-w-md bg-gray-900 dark:bg-white'></div>
                    <img src={colorWheel} alt="icon" className='w-[60px] m-4'/>
                    <div className='h-[1.5px] w-1/3 max-w-md bg-gray-900 dark:bg-white'></div>
                </div>
            </div>
            <div className='h-[600vh] relative' ref={scrollerRef}>
                <div className='sticky max-w-5xl mx-auto top-0 h-[100vh]
                                sm:top-[15vh] sm:h-[80vh] sm:mx-[8vw] lg:mx-auto lg:max-h-[500px]'>
                {currentStep === 0 && (
                    <div className='w-full h-full bg-cover bg-center sm:rounded-2xl relative' 
                                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${complimentaryBg})`}}>
                        <div className='m-6 lg:max-w-lg absolute bottom-5 sm:bottom-0'>
                            <h1 className='font-helveticaBold font-bold text-3xl sm:text-4xl'>Complimentary</h1>
                            <p className='font-helveticaLight mx-4 text-xs sm:text-base'>Opposite colors on the wheel (e.g., blue & orange). High contrast and energy.</p>
                        </div>
                        <img src={complimentary} className='absolute top-20 right-4 max-w-44 sm:max-w-80 sm:top-0 sm:right-0'/>
                    </div>
                )}
                {currentStep === 1 && (
                    <div className='w-full h-full bg-cover bg-center sm:rounded-2xl relative' 
                                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${analogousBg})`}}>
                        <div className='m-6 lg:max-w-lg absolute bottom-5 sm:bottom-0'>
                            <h1 className='font-helveticaBold font-bold text-3xl sm:text-4xl'>Analogous</h1>
                            <p className='font-helveticaLight mx-4 text-xs sm:text-base'>Colors that are next to each other (e.g., red, red-orange, orange). Calm and natural.</p>
                        </div>
                        <img src={analogous} className='absolute top-20 right-4 max-w-44 sm:max-w-80 sm:top-0 sm:right-0'/>
                    </div>
                )}
                {currentStep === 2 && (
                    <div className='w-full h-full bg-cover bg-center sm:rounded-2xl relative' 
                                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${triadicBg})`}}>
                        <div className='m-6 lg:max-w-lg absolute bottom-5 sm:bottom-0'>
                            <h1 className='font-helveticaBold font-bold text-3xl sm:text-4xl'>Triadic</h1>
                            <p className='font-helveticaLight mx-4 text-xs sm:text-base'>Three colors evenly spaced (e.g., red, yellow, blue). Vibrant and balanced.</p>
                        </div>
                        <img src={triadic} className='absolute top-20 right-4 max-w-44 sm:max-w-80 sm:top-0 sm:right-0'/>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}

export default ColorCombination;