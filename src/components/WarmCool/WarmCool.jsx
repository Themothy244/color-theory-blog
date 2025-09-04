import colorWheel from '../../assets/icons/color-wheel.svg';
import coolColor from '../../assets/img/cool-colors.png';
import warmColor from '../../assets/img/warm-colors.png';

function WarmCool() {
    return(
        <div className='my-20'>
            <div className="text-center my-5">
                <img src={colorWheel} width={50} className='mx-auto my-3'/>
                <h3 className="font-helveticaLight text-lg">Warm vs Cool</h3>
                <div className="flex justify-center items-center">
                    <div className='h-[1.5px] w-1/5 sm:w-1/4 max-w-md bg-gray-900 dark:bg-white'></div>
                    <h1 className="font-helveticaBold font-bold mx-4 my-2 text-5xl">Colors</h1>
                    <div className='h-[1.5px] w-1/5 sm:w-1/4 max-w-md bg-gray-900 dark:bg-white'></div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center mx-[8vw] lg:mx-auto'>
                <div className='basis-full bg-gray-200/80 backdrop-blur-lg rounded-2xl p-5 my-2 flex flex-wrap justify-between items-center
                                lg:basis-2/5 lg:max-w-lg lg:mx-2 lg:flex-nowrap dark:bg-gray-800/80'>
                    <div className='mx-4'>
                        <h1 className='font-helveticaBold font-bold text-4xl sm:text-5xl'>Warm Colors</h1>
                        <p className='font-helveticaLight text-lg mx-4'>Ex. Red, orange, yellow</p>
                        <p className='font-helveticaLight text-lg mx-4'>Energetic, passionate, attention-grabbing</p>

                    </div>
                    <img src={warmColor} className='max-w-40 ml-auto' alt="Warm colors"/>
                </div>
                <div className='basis-full bg-gray-200/80 backdrop-blur-lg rounded-2xl p-5 my-2 flex flex-wrap justify-between items-center text-right flex-row-reverse 
                                lg:basis-2/5 lg:max-w-lg lg:mx-2 lg:flex-nowrap dark:bg-gray-800/80'>
                    <div className='sm:mx-4'>
                        <h1 className='font-helveticaBold font-bold text-4xl sm:text-5xl'>Cool Colors</h1>
                        <p className='font-helveticaLight text-lg mx-4'>Ex. Blue, green, purple</p>
                        <p className='font-helveticaLight text-lg mx-4'>Calm, soothing, introspective</p>
                    </div>
                    <img src={coolColor} className='max-w-40 mr-auto' alt="Cool colors"/>
                </div>
            </div>
        </div>
    );
}

export default WarmCool;