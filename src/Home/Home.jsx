import homeImg from "../assets/images/home.jpg";


function Home () {


    return (
        <section id="home" data-title="Home" className="min-h-screen pt-35 pl-5 pr-5">
            <div className="flex flex-col items-center">
                <div className="">
                    <div className="text-4xl font-bold mb-5">
                        <h1>Caleb Noruwa</h1>
                    </div>

                    <div className="text-sm leading-6 flex justify-center mb-5">
                        <p>
                            I'm a student of Anchor Universirty. A 300 level student working at LAPO Microfinance Bank as an intern for a duration of 6 months.
                        </p>
                    </div>

                    <div className="flex list-none gap-10 justify-center mb-10">
                        <li><a className=" bg-gray-300 px-3 py-4 flex justify-center items-center rounded-md shadow-md hover:text-sky-500 hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-2" href="#">Download CV</a></li>

                        <li><a className="bg-gray-400 px-3 py-4 flex justify-center items-center rounded-md hover:text-sky-500 hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-2" href="#">Explore More</a></li>
                    </div>
                </div>
                <div className="w-90 flex justify-center">
                    <img 
                        src={homeImg} 
                        alt="Caleb Noruwa" 
                        className="rounded-2xl w-1/2"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;