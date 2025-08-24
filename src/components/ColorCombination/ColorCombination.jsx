import colorWheel from '../../assets/icons/color-wheel.svg';
import complimentary from '../../assets/img/Complimentary-wheel.png';
import analogous from '../../assets/img/Analogous-wheel.png';
import triadic from '../../assets/img/Triadic-wheel.png';

function ColorCombination() {
    return(
        <div className='my-40'>
            <div className='text-center'>
                <h1 className='font-helveticaBold text-bold text-4xl'>Color Harmonies</h1>
                <h3 className='font-helveticaLight'>What works together</h3>
                <div className='flex justify-center items-center'>
                    <div className='h-[1.5px] w-1/3 max-w-md bg-gray-900 dark:bg-white'></div>
                    <img src={colorWheel} alt="icon" className='w-[60px] m-4'/>
                    <div className='h-[1.5px] w-1/3 max-w-md bg-gray-900 dark:bg-white'></div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <h1>Complimentary</h1>
                        <p>Opposite colors on the wheel (e.g., blue & orange). High contrast and energy.</p>
                        <img src={complimentary} className='w-96'/>
                    </div>
                    <div>
                        <h1>Analogous</h1>
                        <p>Colors that are next to each other (e.g., red, red-orange, orange). Calm and natural.</p>
                        <img src={analogous} className='w-96'/>
                    </div>
                    <div>
                        <h1>Triadic</h1>
                        <p>Three colors evenly spaced (e.g., red, yellow, blue). Vibrant and balanced.</p>
                        <img src={triadic} className='w-96'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorCombination;