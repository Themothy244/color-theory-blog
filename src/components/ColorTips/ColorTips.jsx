import icon from '../../assets/icons/color-palette.svg';
import spectrum from '../../assets/img/color-spectrum.png';

function ColorTips() {
    return(
        <div>
            <div className='text-center'>
                <h3 className='font-helveticaLight text-xl'>Experimenting with</h3>
                <h1 className='font-helveticaBold text-4xl my-2 mx-3'>Colors: Beginner Tips</h1>
                <div className='flex justify-center items-center'>
                    <div className='h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white'></div>
                    <img src={icon} alt="icon" width={50} className='m-3'/>
                    <div className='h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white'></div>
                </div>
            </div>
            <div>
                <div>
                    <h1>Start with limited palettes</h1>
                    <p>Using just 2–3 colors helps you learn control.</p>

                    <h1>Play with contrast</h1>
                    <p>Use light vs. dark or warm vs. cool to guide the eye.</p>

                    <h1>Observe nature and other artists</h1>
                    <p>Take notes on how they use color.</p>

                    <p>Use digital tools like Adobe Color or Coolors.co for color scheme ideas.</p>
                </div>
                <img src={spectrum} alt="color wheel spectrum" />
            </div>
        </div>
    );
}

export default ColorTips;