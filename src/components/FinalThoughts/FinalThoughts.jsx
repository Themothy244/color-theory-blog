import icon from '../../assets/icons/color-palette.svg';
import colorWheel from '../../assets/img/color-wheel-2.png';

function FinalThoughts() {
    return(
        <div className='my-60'>
            <div className='text-center'>
                <h3 className='font-helveticaLight text-xl'>Final Thoughts on</h3>
                <h1 className='font-helveticaBold font-bold text-4xl my-2 mx-3'>Color Theory</h1>
                <div className='flex justify-center items-center'>
                    <div className='h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white'></div>
                    <img src={icon} alt="icon" width={50} className='m-3'/>
                    <div className='h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white'></div>
                </div>
            </div>

            <div>
                <img src={colorWheel} alt="color wheel" />
            </div>

            <div>
                <p>
                    Understanding color theory doesn’t mean following 
                    strict rules—it’s about knowing your tools so you 
                    can break the rules with intention. With practice, 
                    you’ll start to choose colors more intuitively and 
                    expressively.
                </p>
                <p>Next Step: Try creating an artwork using just an 
                    analogous or complementary color scheme!</p>
            </div>
        </div>
    );
}

export default FinalThoughts;