import icon from '/colour-icon.png'

function Footer(){
    return(
        <div>
            <div>
                <div>
                    <img src={icon} alt="icon" />
                    <h1>About This Blog</h1>
                </div>
                <p>
                    "Understanding Color Theory" helps beginners 
                    make sense of color through simple, creative, 
                    and practical tips for art, design, and self-expression.
                </p>
            </div>
            <div>
                <a href="#" className="m-3 font-helveticaLight">Home</a>
                <a href="#" className="m-3 font-helveticaLight">Basics</a>
                <a href="#" className="m-3 font-helveticaLight">Harmonies</a>
                <a href="#" className="m-3 font-helveticaLight">Emotion</a>
            </div>
            <p>&copy; 2025 Understanding Color Theory. All rights reserved.</p>
        </div>
    );
}

export default Footer;