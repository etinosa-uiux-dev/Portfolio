import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";



function Header () {

    const [isOpen, setIsOpen] = useState (false);
    const [title, setTitle] = useState("Caleb");

    useEffect ( () => {
        const sections = document.querySelectorAll ("section");

        const observer = new IntersectionObserver ( (entries) => {
            entries.forEach ( entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const sectionTitle = entry.target.dataset.title;

                    if (sectionId === "home") {
                        setTitle ("Caleb");
                    }
                    else if (sectionTitle) {
                        setTitle (sectionTitle);
                    }
                }
            });
        },
        {threshold: 0.6} // section is considered active when 60% visible
        );

        sections.forEach ( section => observer.observe (section));

        return () => observer.disconnect ();
    }, []);

    return (
        <header className="bg-gray-300 shadow-md fixed top-1 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[98%] z-[999] rounded-3xl">
            <nav className="flex items-center justify-between px-8 py-6">
                <h1 className="mini:text-2xl sm:text-4xl font-bold p-2 rounded-3xl">{title}</h1>
                
                <ul className="hidden md:flex gap-6 text-base uppercase">
                    <li><a href="#home" className="inline-block hover:text-sky-500 hover:scale-105 transition-transform duration-200">Home</a></li>
                    <li><a href="#about" className="inline-block hover:text-sky-500 hover:scale-105 transition-transform duration-200">About</a></li>
                    <li><a href="#skills" className="inline-block hover:text-sky-500 hover:scale-105 transition-transform duration-200">Skills</a></li>
                    <li><a href="#projects" className="inline-block hover:text-sky-500 hover:scale-105 transition-transform duration-200">Projects</a></li>
                    <li><a href="#contact" className="inline-block hover:text-sky-500 hover:scale-105 transition-transform duration-200">Contact</a></li>
                </ul>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none hover:cursor-pointer">
                    {isOpen ? <FaTimes />  : <FaBars /> }
                </button>
            </nav>

            <div className={`fixed top-0 w-2/3 bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${isOpen ? "right-0" : "-right-full"}`}>

                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-2xl hover:cursor-pointer">
                    <FaTimes />
                </button>

                <ul className="bg-gray-200 flex flex-col items-center gap-6 py-10 font-medium">
                    <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-sky-500">Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-sky-500">About</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-sky-500">Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-sky-500">Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-sky-500">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;