import icon from '../../assets/icons/color-palette.svg';
import colorWheel from '../../assets/img/color-wheel-2.png'

function ColorTheoryIntro() {
    return(
        <div className='mt-40 py-16 lg:my-60 relative'>
            <div className='justify-items-center'>
                <h3 className='font-helveticaBold font-bold text-2xl'>What is</h3>
                <h1 className='font-helveticaBold font-bold text-4xl'>Color Theory</h1>
                <div className='flex flex-row items-center justify-center w-full'>
                    <div className='h-[1.5px] w-1/3 max-w-md bg-gray-900 dark:bg-white'></div>
                    <img src={icon} alt="icon" width={50} className='m-4'/>
                    <div className='h-[1.5px] w-1/3 max-w-md bg-gray-900 dark:bg-white'></div>
                </div>
            </div>

            <div className='w-full max-w-sm aspect-square rounded-full overflow-hidden sm:w-3/4 lg:w-1/3 xl:mx-12 absolute top-1/3 right-1/2 z-0 md:right-[58%]'>
                <img src={colorWheel} alt='color wheel' className='w-full h-full object-cover animate-spinn'/>
            </div>

            <div className='bg-gray-200/80 backdrop-blur-lg mx-[8vw] my-5 rounded-2xl p-5 lg:max-w-3xl lg:mx-auto md:p-6
                            dark:bg-gray-800/80'>
                <p className='font-helveticaLight mb-3 md:text-lg'>
                    Color theory is the science and art of how colors work together and how they affect what we see and feel. It helps explain which color combinations look good, how they create balance, and how certain colors can influence our emotions or draw attention.
                </p>
                <p className='font-helveticaLight md:text-lg'>
                    In simple terms, color theory is the reason behind the colors you choose in your artwork. It helps you make better design decisions by showing how to mix and match colors in a way that feels natural and visually pleasing.
                </p>
            </div>
        
        </div>
    );
}

export default ColorTheoryIntro;