import colorWheel from '../../assets/icons/color-wheel.svg';
function WarmCool() {
    return(
        <div>
            <div className="text-center my-10">
                <img src={colorWheel} width={50} className='mx-auto my-3'/>
                <h3 className="font-helveticaLight text-lg">Warm vs Cool</h3>
                <div className="flex justify-center items-center">
                    <div className='h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white'></div>
                    <h1 className="font-helveticaBold font-bold mx-4 my-2 text-5xl">Colors</h1>
                    <div className='h-[1.5px] w-1/4 max-w-md bg-gray-900 dark:bg-white'></div>
                </div>
            </div>
            <div>
                <div>
                    <h1>Warm Colors</h1>
                    <p>Ex. Red, orange, yellow</p>
                    <p>Energetic, passionate, attention-grabbing</p>
                    <img src="#" alt="Warm colors"/>
                </div>
                <div>
                    <h1>Cool Colors</h1>
                    <p>Ex. Blue, green, purple</p>
                    <p>Calm, soothing, introspective</p>
                    <img src="#" alt="Cool colors"/>
                </div>
            </div>
        </div>
    );
}

export default WarmCool;