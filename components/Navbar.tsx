import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.jpeg";

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
                    {/* Logo */}
                    <a href="#/" className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="River Edge Logo"
                            className="h-10 w-auto sm:h-12 md:h-16 block transition-all duration-300"
                        />
                    </a>

                    {/* Nav links - hidden on small screens */}
                    <nav className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => scrollToSection("amenities")}
                            className="text-gray-600 hover:text-brand-pink font-medium px-3 py-2 rounded-md"
                        >
                            Amenities
                        </button>
                        <button
                            onClick={() => scrollToSection("reviews")}
                            className="text-gray-600 hover:text-brand-pink font-medium px-3 py-2 rounded-md"
                        >
                            Reviews
                        </button>
                        <button
                            onClick={() => scrollToSection("booking")}
                            className="bg-brand-pink text-white font-bold px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
                        >
                            Book Now
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
