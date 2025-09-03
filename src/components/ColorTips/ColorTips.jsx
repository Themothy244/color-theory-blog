import icon from '../../assets/icons/color-palette.svg';
import spectrum from '../../assets/img/color-spectrum.png';

function ColorTips() {
    return(
        <div>
            <div>
                <h3>Experimenting with</h3>
                <h1>Colors: Beginner Tips</h1>
                <div>
                    <div></div>
                    <img src={icon} alt="icon" />
                    <div></div>
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