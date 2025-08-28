import contactPic from "../assets/images/contact.jpg";


function Contact () {

    return (
        <section id="contact" data-title="Contact" className="p-5 pb-10">
            <div>
                <h1 className="text-3xl font-bold mb-20">Contact Me</h1>

                <div className="flex flex-wrap justify-center gap-12 mb-20">
                    <div className="min-w-80 flex flex-col bg-gray-200 pt-5 pb-5 p-2 md:p-5 rounded-2xl">
                        <h3 className="text-xl font-semibold mb-10">Get in touch</h3>

                        <div className="bg-red300 flex justify-start items-center gap-2 mb-3">
                            <div className="bg-zinc-400 w-15 h-15 overflow-hidden  flex-none rounded-full">
                                <img src={contactPic} alt="" />
                            </div>

                            <div className="border p-1 rounded flex flex-wrap justify-start max-w-100">
                                <p>
                                    Hey, I'm Caleb. Need my help? Use the form below or email me at caleb20etinosa@gmail.com
                                </p>
                            </div>
                        </div>

                        <div>
                            <form action="" className="space-y-3">
                                <label htmlFor="name" className="block">Name:</label>
                                <input type="text" id="name" name="name" placeholder="John Doe" className="border rounded p-1 font-sans w-full pl-3" />

                                <label htmlFor="email" className="block">Email</label>
                                <input type="text" id="email" name="name" placeholder="johndoe@gmail.com" className="border rounded p-1 font-sans w-full pl-3" />

                                <label htmlFor="message" className="block">Message</label>
                                <textarea name="message" id="message" placeholder="Type your message here..."  className="border rounded p-1 font-sans w-full h-30 pl-3"></textarea>

                                <input type="submit" className="block bg-gray-300 px-7 p-2 rounded-3xl cursor-pointer hover:bg-gray-500 hover:text-white hover:scale-105 transition-transform duration-200" />
                            </form>
                        </div>
                    </div>

                    <div className="h-120 w-125 p-2 flex flex-col justify-start items-center">
                        <h3 className="text-xl font-semibold mb-10">Work Place</h3>

                        <div className="w-full flex-auto overflow-hidden rounded-2xl shadow-2xl p-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.57243418876!2d3.3668541756801993!3d6.575519222555244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b7fcc5b6ad%3A0xa8d7d977e270d83c!2sLAPO%20Microfinance%20Bank%20Ltd!5e0!3m2!1sen!2sng!4v1747435738252!5m2!1sen!2sng"
                                className="w-full h-full rounded-2xl"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="LAPO Microfinance Bank Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;