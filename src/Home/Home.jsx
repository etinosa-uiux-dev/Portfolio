import homeImg from "../assets/images/home.jpg";


function Home () {


    return (
        <section id="home" data-title="Home" className="min-h-screen pt-35 pl-5 pr-5">
            <div className="miniTab:h-150 flex flex-wrap justify-center items-center gap-6 tab:gap-20">
                <div className="w-150 miniTab:w-110 lg:w-130 tab:w-150">
                    <div className="text-4xl font-bold mb-5 tab:mb-10">
                        <h1>Caleb Noruwa</h1>
                    </div>

                    <div className="text-sm tab:text-lg leading-6 flex justify-center mb-5 tab:mb-10">
                        <p>
                            I'm a student of Anchor Universirty. A 300 level student working at LAPO Microfinance Bank as an intern for a duration of 6 months.
                        </p>
                    </div>

                    <div className="flex list-none gap-10 justify-center miniTab:justify-start mb-10">
                        <li><a className=" bg-gray-300 px-3 sm:px-5 py-4 flex justify-center items-center rounded-md shadow-md hover:text-sky-500 hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-2" href="#">Download CV</a></li>

                        <li><a className="bg-gray-400 px-3 sm:px-5 py-4 flex justify-center items-center rounded-md hover:text-sky-500 hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-2" href="#">Explore More</a></li>
                    </div>
                </div>

                <img 
                    src={homeImg} 
                    alt="Caleb Noruwa" 
                    className="rounded-2xl w-60 miniTab:w-70 lg:w-80 tab:w-100"
                />
                {/* <div className="w-90 tab:w-150 bg-amber-300 sm:w-120 lg:w-140 flex justify-center">
                    <img 
                        src={homeImg} 
                        alt="Caleb Noruwa" 
                        className="rounded-2xl w-1/2 tab:w-"
                    />
                </div> */}
            </div>
        </section>
    );
}

export default Home;