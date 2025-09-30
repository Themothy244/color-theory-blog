import ColorWheel from "../ColorWheel/ColorWheel";
import DonutChart from "../DonutChart/DonutChart";
import useScrollAnimate from "../../hooks/useScrollAnimate";

function ColorCategory() {
    const [ref1, isVisible1] = useScrollAnimate();
    const [ref2, isVisible2] = useScrollAnimate();
    const [ref3, isVisible3] = useScrollAnimate();
    const [refW1, isVisibleW1] = useScrollAnimate();
    
    const [ref4, isVisible4] = useScrollAnimate();
    const [ref5, isVisible5] = useScrollAnimate();
    const [ref6, isVisible6] = useScrollAnimate();
    const [refW2, isVisibleW2] = useScrollAnimate();
    
    const [ref7, isVisible7] = useScrollAnimate();
    const [ref8, isVisible8] = useScrollAnimate();
    const [ref9, isVisible9] = useScrollAnimate();
    const [refW3, isVisibleW3] = useScrollAnimate();

    const primaryLabel = ['red', 'blue', 'yellow'];
    const primaryColor = ['#FF0000', '#0000FF', '#FFFF00'];

    const secondaryLabel = ['orange', 'green', 'purple'];
    const secondaryColor = ['#FFA500', '#00FF00', '#800080'];

    const tertiaryLabel = ['red-orange', 'yellow-orange', 'yellow-green', 'blue-green', 'blue-purple', 'red-purple'];
    const tertiaryColor = ['#FF4500', '#FFD700', '#ADFF2F', '#20B2AA', '#8A2BE2', '#C71585'];

    return(
        <div className="h-[800vh] my-8">
            <div className="h-[200vh] sticky top-0 py-[5%]">
                <ColorWheel />
            </div>
            <div className="h-[200vh] bg-gray-100/70 dark:bg-[#191919]/70 backdrop-blur-lg sticky top-0 py-10">
                <div className="mx-[8vw] sticky top-[18%] flex flex-wrap lg:justify-center lg:items-center lg:mx-auto">
                    <div className="lg:max-w-md">
                        <h1 ref={ref1} className={`${isVisible1 ? 'animate-fadeUpDelay' : 'opacity-0'} font-helveticaBold font-bold text-4xl sm:text-6xl`}>Primary Colors</h1>
                        <div ref={ref2} className={`${isVisible2 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-3/4 max-w-md my-3 bg-gray-900 dark:bg-white`}></div>

                        <p ref={ref3} className={`${isVisible3 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight md:text-lg`}>
                            These are the base colors that can’t be created by mixing others.
                        </p>
                    </div>
                    <div ref={refW1} className={`${isVisibleW1 ? 'animate-fadeIn' : 'opacity-0'} my-10 mx-auto w-full md:max-w-lg lg:mx-0 lg:max-w-sm`}>
                        <DonutChart labels={primaryLabel} colors={primaryColor}/>
                    </div>
                </div>
            </div>

            <div className="h-[200vh] bg-gray-200/70 dark:bg-[#0f0f0f]/70 backdrop-blur-lg sticky top-0 py-10">
                <div className="mx-[8vw] sticky top-[18%] flex flex-wrap lg:justify-center lg:items-center lg:mx-auto">
                    <div className="lg:max-w-md">
                        <h1 ref={ref4} className={`${isVisible4 ? 'animate-fadeUpDelay' : 'opacity-0'} font-helveticaBold font-bold text-4xl sm:text-6xl`}>Secondary Colors</h1>
                        <div ref={ref5} className={`${isVisible5 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-3/4 max-w-md my-3 bg-gray-900 dark:bg-white`}></div>

                        <p ref={ref6} className={`${isVisible6 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight md:text-lg`}>
                            These are created by mixing two primary colors.
                        </p>
                    </div>
                    <div ref={refW2} className={`${isVisibleW2 ? 'animate-fadeIn' : 'opacity-0'} my-10 mx-auto w-full md:max-w-lg lg:mx-0 lg:max-w-sm`}>
                        <DonutChart labels={secondaryLabel} colors={secondaryColor}/>
                    </div>
                </div>
            </div>

            <div className="h-[200vh] bg-gray-300/70 dark:bg-[#191919]/70 backdrop-blur-lg sticky top-0 py-10">
                <div className="mx-[8vw] sticky top-[18%] flex flex-wrap lg:justify-center lg:items-center lg:mx-auto">
                    <div className="lg:max-w-md">
                        <h1 ref={ref7} className={`${isVisible7 ? 'animate-fadeUpDelay' : 'opacity-0'} font-helveticaBold font-bold text-4xl sm:text-6xl`}>Tertiary Colors</h1>
                        <div ref={ref8} className={`${isVisible8 ? 'animate-wExpand' : 'opacity-0'} h-[1.5px] w-3/4 max-w-md my-3 bg-gray-900 dark:bg-white`}></div>

                        <p ref={ref9} className={`${isVisible9 ? 'animate-fadeSlide' : 'opacity-0'} font-helveticaLight md:text-lg`}>
                            These are made by mixing a primary and a secondary color.
                        </p>
                    </div>
                    <div ref={refW3} className={`${isVisibleW3 ? 'animate-fadeIn' : 'opacity-0'} my-10 mx-auto w-full md:max-w-lg lg:mx-0 lg:max-w-sm`}>
                        <DonutChart labels={tertiaryLabel} colors={tertiaryColor}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorCategory;