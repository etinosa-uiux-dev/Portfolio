import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";



function Header () {

    const [isOpen, setIsOpen] = useState (false);
    const [title, setTitle] = useState("Caleb");

    useEffect ( () => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const sections = document.querySelectorAll ("section");

        const isTab = window.matchMedia ("(min-width: 1200px)").matches;

        const threshold = isTab ? [0.7] : [0.4];

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
        {threshold} // section is considered active when 30%, 60%, and 100% visible
        );

        sections.forEach ( section => observer.observe (section));

        return () => {
            observer.disconnect ();
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <header className="bg-gray-300 shadow-md fixed top-1 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[98%] z-[999] rounded-3xl">
            <nav className="flex items-center justify-between px-8 py-6">
                <h1 className="mini:text-2xl sm:text-4xl font-bold p-2 rounded-3xl">{title}</h1>
                
                <ul className="hidden md:flex gap-6 text-base uppercase">
                    <li><a href="#home" className="inline-block hover:text-white hover:scale-105 transition-transform duration-200">Home</a></li>
                    <li><a href="#about" className="inline-block hover:text-white hover:scale-105 transition-transform duration-200">About</a></li>
                    <li><a href="#skills" className="inline-block hover:text-white hover:scale-105 transition-transform duration-200">Skills</a></li>
                    <li><a href="#projects" className="inline-block hover:text-white hover:scale-105 transition-transform duration-200">Projects</a></li>
                    <li><a href="#contact" className="inline-block hover:text-white hover:scale-105 transition-transform duration-200">Contact</a></li>
                </ul>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none hover:cursor-pointer">
                    {isOpen ? <FaTimes />  : <FaBars /> }
                </button>
            </nav>

            <div className={`fixed top-0 w-2/3 bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden rounded-3xl ${isOpen ? "right-0" : "-right-full"}`}>

                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-2xl hover:cursor-pointer">
                    <FaTimes />
                </button>

                <ul className="bg-gray-300 flex flex-col items-center gap-6 py-10 font-medium rounded-3xl">
                    <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-white">Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white">About</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-white">Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white">Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white">Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;