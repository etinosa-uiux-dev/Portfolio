import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";



function Header () {

    const [isOpen, setIsOpen] = useState (false);

    return (
        <header className="bg-gray-300 shadow-md fixed top-1 left-1/2 transform -translate-x-1/2 w-[95%] z-[999] rounded-3xl">
            <nav className="flex items-center justify-between px-8 py-6">
                <h1 className="text-4xl font-bold p-2 rounded-3xl">Caleb</h1>
                
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

            <div className={`fixed top-0 right-0 w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "trannslate-x-0" : "translate-x-[100vw]"}`}>

                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-2xl hover:cursor-pointer">
                    <FaTimes />
                </button>

                <ul className="md:hidden flex flex-col items-center gap-6 py-20 font-medium">
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;