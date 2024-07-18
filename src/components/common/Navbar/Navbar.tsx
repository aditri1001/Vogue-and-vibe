import React, { useState, useEffect, useRef, useCallback } from 'react';
import searchIcon from "../../../assets/icons/navbar/search.svg";
import hamburgerIcon from "../../../assets/icons/navbar/hamburger.svg";
import "./Navbar.css";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const Navbar = React.memo(() => {
    gsap.registerPlugin(ScrollToPlugin);


    const [isNavVisible, setIsNavVisible] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);
    const [searchActive, setSearchActive] = useState(false);
    const searchRef = useRef(null);

    const toggleSearch = () => {
        setSearchActive(prev => !prev);
        if (!searchActive) {
            gsap.to(searchRef.current, {
                width: '100%', // Adjust the width as needed
                padding: '10px', // Adjust the padding as needed
                duration: 0.5,
                ease: 'power3.out'
            });
        } else {
            gsap.to(searchRef.current, {
                width: '0',
                padding: '0',
                duration: 0.5,
                ease: 'power3.in'
            });
        }
    };

    const toggleNav = React.useCallback(() => {
        setIsNavVisible(prevState => !prevState);
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (
            navRef.current &&
            !navRef.current.contains(event.target as Node) &&
            hamburgerRef.current &&
            !hamburgerRef.current.contains(event.target as Node) ||
            event.target === navRef.current // Add this line
        ) {
            setIsNavVisible(false);
        }
    }, []);


    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            handleClickOutside(event);
        };

        if (isNavVisible) {
            document.addEventListener('click', handleDocumentClick);
            gsap.to(navRef.current, {
                autoAlpha: 1, // Animate opacity to 1
                scale: 1, // Animate scale to 100%
                duration: 0.5, // Duration of the animation
                ease: "power3.out", // Smooth easing function
            });
        } else {
            document.removeEventListener('click', handleDocumentClick);
            gsap.to(navRef.current, {
                autoAlpha: 0, // Animate opacity to 0
                scale: 0.95, // Animate scale to 95%
                duration: 1, // Duration of the animation
                ease: "power3.in", // Smooth easing function
            });
        }

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [isNavVisible, handleClickOutside]);

    useEffect(() => {
        gsap.set(".nav-link", { scale: 1 });
        gsap.set(".dropdown-item", { scale: 1 });

        gsap.to(".nav-link:hover", {
            scale: 1.1,
            duration: 0.3,
            ease: "power1.inOut"
        });

        gsap.to(".dropdown-item:hover", {
            scale: 1.05,
            duration: 0.3,
            ease: "power1.inOut"
        });
    }, []);

    return (
        <div className="relative z-20 flex justify-between items-center">
            {/* Search Icon */}
            <div className="search-container flex items-center border border-zinc-300 rounded-full p-2">
                <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="search-icon cursor-pointer"
                    onClick={toggleSearch}
                />
                <input
                    type="text"
                    className={`search-input ml-2 outline-none bg-transparent ${searchActive ? '' : 'hidden'}`}
                    placeholder="Search"
                />
            </div>

            {/* Hamburger Icon */}
            <div onClick={toggleNav} ref={hamburgerRef}>
                <img
                    src={hamburgerIcon}
                    alt="Hamburger Icon"
                    className="cursor-pointer"
                    style={{ width: "80px", height: "80px" }}
                />
            </div>

            {/* Overlay Nav Menu */}
            {isNavVisible && (
                <div className="overlay" ref={navRef}>
                    <div className="overlay-content rounded-3xl shadow-3xl">
                        <nav className="nav-menu">
                            <a href="/" className="nav-link">Home</a>
                            <a href="#" className="nav-link models">Models
                                <ul className='dropdown'>
                                    <li className='text-xl text-black'><a href="#" className="dropdown-item">Men</a></li>
                                    <li className='text-xl text-black'><a href="#" className="dropdown-item">Women</a></li>
                                    <li className='text-xl text-black'><a href="#" className="dropdown-item">Other</a></li>
                                </ul>
                            </a>
                            <a href="/model" className="nav-link">Become Model</a>
                            <a href="/workshop" className="nav-link">Workshop</a>
                            <a href="/contact" className="nav-link">Contact</a>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
});

export default Navbar;
