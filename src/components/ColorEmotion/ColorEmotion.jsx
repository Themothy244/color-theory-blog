
function ColorEmotion() {
    return(
        <div className="w-full my-60 bg-gray-200 dark:bg-gray-800/80">
            <div className="max-w-5xl mx-auto py-11 px-[8vw] xl:px-0 ">
                <div>
                    <h1 className="font-helveticaBold font-bold text-3xl my-2">Using Color to Create Mood and Emotion</h1>
                    <p className="font-helveticaLight text-md sm:text-xl">Color has a psychological impact</p>
                    <div className='h-[1.5px] w-3/4 max-w-md my-4 bg-gray-900 dark:bg-white'></div>
                </div>

                <div className="flex flex-wrap my-4">
                    <div className="basis-full sm:basis-1/2">
                        <div className="my-8 flex">
                            <div className="h-10 w-10 bg-[red] rounded-full mx-3"></div>
                            <div>
                                <h1 className="font-helveticaBold font-bold text-xl sm:text-2xl">Red</h1>
                                <p className="font-helveticaLight text-md sm:text-lg">Excitement, urgency, intensity</p>
                            </div>
                        </div>
                        <div className="my-8 flex">
                            <div className="h-10 w-10 bg-[blue] rounded-full mx-3"></div>
                            <div>
                                <h1 className="font-helveticaBold font-bold text-xl sm:text-2xl">Blue</h1>
                                <p className="font-helveticaLight text-md sm:text-lg">Trust, calm, stability</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="h-10 w-10 bg-[green] rounded-full mx-3"></div>
                            <div>
                                <h1 className="font-helveticaBold font-bold text-xl sm:text-2xl">Green</h1>
                                <p className="font-helveticaLight text-md sm:text-lg">Growth, freshness, balance</p>
                            </div>
                        </div>
                    </div>

                    <div className="basis-full sm:basis-1/2">
                        <div className="my-8 flex">
                            <div className="h-10 w-10 bg-[purple] rounded-full mx-3"></div>
                            <div>
                                <h1 className="font-helveticaBold font-bold text-xl sm:text-2xl">Purple</h1>
                                <p className="font-helveticaLight text-md sm:text-lg">Creativity, mystery, luxury</p>
                            </div>
                        </div>
                        <div className="my-8 flex">
                            <div className="h-10 w-10 bg-[yellow] rounded-full mx-3"></div>
                            <div>
                                <h1 className="font-helveticaBold font-bold text-xl sm:text-2xl">Yellow</h1>
                                <p className="font-helveticaLight text-md sm:text-lg">Joy, energy, optimism</p>
                            </div>
                        </div>
                        <div className="my-8 flex">
                            <div className="h-10 w-10 bg-[linear-gradient(to_right,_black_50%,_white_50%)] rounded-full mx-3"></div>
                            <div>
                                <h1 className="font-helveticaBold font-bold text-xl sm:text-2xl">Black/White</h1>
                                <p className="font-helveticaLight text-md sm:text-lg">Drama, clarity, contrast</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="font-helveticaLight text-md sm:text-lg text-center">Ask yourself: What emotion do I want this artwork to evoke?</p>
                </div>

            </div>
        </div>
    );
}

export default ColorEmotion;