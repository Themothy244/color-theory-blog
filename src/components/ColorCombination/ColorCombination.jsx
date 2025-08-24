import colorWheel from '../../assets/icons/color-wheel.svg';
import complimentary from '../../assets/img/Complimentary-wheel.png';
import analogous from '../../assets/img/Analogous-wheel.png';
import triadic from '../../assets/img/Triadic-wheel.png';

function ColorCombination() {
    return(
        <div>
            <div>
                <h1>Color Harmonies</h1>
                <h3>What works together</h3>
                <div>
                    <div></div>
                    <img src={colorWheel} alt="icon" className='w-[50px]'/>
                    <div></div>
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
                    </div><div>
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