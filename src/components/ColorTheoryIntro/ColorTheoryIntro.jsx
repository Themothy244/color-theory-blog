import icon from '../../assets/icons/color-palette.svg';

function ColorTheoryIntro() {
    return(
        <div className='my-16 py-16 lg:my-40'>
            <div className='justify-items-center'>
                <h3 className='font-helveticaBold font-bold text-2xl'>What is</h3>
                <h1 className='font-helveticaBold font-bold text-4xl'>Color Theory</h1>
                <div className='flex flex-row items-center justify-center w-full'>
                    <div className='h-[1.5px] w-1/3 max-w-md bg-gray-900 dark:bg-white'></div>
                    <img src={icon} alt="icon" width={50} className='m-4'/>
                    <div className='h-[1.5px] w-1/3 max-w-md bg-gray-900 dark:bg-white'></div>
                </div>
            </div>
            <div>
                <p className='font-helveticaLight'>
                    Color theory is the science and art of using color. It helps 
                    us understand how colors work together, how they affect our 
                    emotions, and how to create visually pleasing combinations.
                </p>
                <p>In simple terms, it’s the why and how behind the colors you choose in your artwork.</p>
            </div>
        </div>
    );
}

export default ColorTheoryIntro;