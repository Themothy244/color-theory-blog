import colorWheel from '../../assets/img/color-wheel-1.png'

function ColorWheel() {
    return(
        <div>
            <div>
                <h1>The Color Wheel</h1>
                <div></div>
            </div>
            <div>
                <div>
                    <p>
                        The color wheel is a circular chart that shows how 
                        colors relate to one another. It includes primary, 
                        secondary, and tertiary colors, helping you understand 
                        color harmony and contrast. Artists and designers use it 
                        to choose color combinations that work well together, 
                        whether for creating balance, contrast, or visual interest.
                    </p>
                </div>
                <div>
                    <div>
                        <img src={colorWheel} alt="color wheel" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorWheel;