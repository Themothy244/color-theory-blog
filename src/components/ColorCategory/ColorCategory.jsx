import ColorWheel from "../ColorWheel/ColorWheel";
import DonutChart from "../DonutChart/DonutChart";

function ColorCategory() {
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
            <div className="h-[200vh] bg-[#191919]/70 backdrop-blur-lg sticky top-0 py-10">
                <div className="mx-[8vw] sticky top-[18%]">
                    <div>
                        <h1 className="font-helveticaBold font-bold text-4xl">Primary Colors</h1>
                    <div className='h-[1.5px] w-3/4 max-w-md my-3 bg-gray-900 dark:bg-white'></div>

                        <p className="font-helveticaLight">
                            These are the base colors that can’t be created by mixing others.
                        </p>
                    </div>
                    <div className="my-5">
                        <DonutChart labels={primaryLabel} colors={primaryColor}/>
                    </div>
                </div>
            </div>

            <div className="h-[200vh] bg-[#0f0f0f]/70 backdrop-blur-lg sticky top-0 py-10">
                <div className="mx-[8vw] sticky top-[18%]">
                    <div>
                        <h1 className="font-helveticaBold font-bold text-4xl">Secondary Colors</h1>
                    <div className='h-[1.5px] w-3/4 max-w-md my-3 bg-gray-900 dark:bg-white'></div>

                        <p className="font-helveticaLight">
                            These are created by mixing two primary colors.
                        </p>
                    </div>
                    <div className="my-5">
                        <DonutChart labels={secondaryLabel} colors={secondaryColor}/>
                    </div>
                </div>
            </div>

            <div className="h-[200vh] bg-[#000000]/70 backdrop-blur-lg sticky top-0 py-10">
                <div className="mx-[8vw] sticky top-[18%]">
                    <div>
                        <h1 className="font-helveticaBold font-bold text-4xl">Tertiary Colors</h1>
                    <div className='h-[1.5px] w-3/4 max-w-md my-3 bg-gray-900 dark:bg-white'></div>

                        <p className="font-helveticaLight">
                            These are made by mixing a primary and a secondary color.
                        </p>
                    </div>
                    <div className="my-5">
                        <DonutChart labels={tertiaryLabel} colors={tertiaryColor}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorCategory;