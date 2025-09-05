import icon from '/colour-icon.png'

function Footer(){
    return(
        <div className='bg-gray-950 text-white py-4 px-[8vw] text-center mt-96'>
            <div className='my-12'>
                <div>
                    <img src={icon} alt="icon" width={40} className='mx-auto my-3'/>
                    <h1 className='font-helveticaBold font-bold text-3xl'>About This Blog</h1>
                </div>
                <p className='font-helveticaLight text-base max-w-xl mx-auto my-3'>
                    "Understanding Color Theory" helps beginners 
                    make sense of color through simple, creative, 
                    and practical tips for art, design, and self-expression.
                </p>
            </div>
            <div className='flex flex-wrap justify-center my-3'>
                <a href="#" className="m-4 font-helveticaLight">Home</a>
                <a href="#" className="m-4 font-helveticaLight">Basics</a>
                <a href="#" className="m-4 font-helveticaLight">Harmonies</a>
                <a href="#" className="m-4 font-helveticaLight">Emotion</a>
            </div>
            <div className='h-[0.5px] w-4/5 my-4 mx-auto bg-white'></div>
            <p className='font-helveticaLight text-xs sm:text-sm'>&copy; 2025 Understanding Color Theory. All rights reserved.</p>
        </div>
    );
}

export default Footer;