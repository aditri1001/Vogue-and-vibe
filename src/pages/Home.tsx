import React, { useEffect, useRef } from 'react'; 
import videoSrc from "../assets/videos/s2-1.mp4";
import "../styles/Home.css";
import scrollDownIcon from "../assets/icons/navbar/scrolldown.svg";
import Navbar from '../components/common/Navbar/Navbar';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const LandingPage = React.memo(() => {
    const servicesRef = useRef<HTMLDivElement>(null);
    gsap.registerPlugin(ScrollToPlugin);
    const scrollToServices = () => {
        servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (event.deltaY > 30) {
                console.log("scrolling down");
                gsap.to(window, {
                    scrollTo: { y: servicesRef.current?.offsetTop, autoKill: false },
                    duration: 1,
                    ease: "power3.out",
                    onStart: () => {
                        // Fade in the servicesRef section as it comes into view
                        gsap.fromTo(servicesRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 });
                    }
                });
            }
        };
    
        window.addEventListener('wheel', handleScroll);
    
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);
    
    return (
        <div>
            {/* Hero section */}
            <section className="w-full h-screen overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Navbar component */}
                <Navbar />
                
                {/* Branding */}
                <div className="absolute bottom-10 left-10 text-white">
                    <span className="text-6xl font-bold hero">V2</span> 
                    {/* <br/> */}
                    <span className="text-2xl hero">VOGUE & VIBE</span>
                </div>
                
                {/* Down Arrow */}
                <div className="absolute bottom-10 right-10">
                    <button className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center"
                        onClick={scrollToServices}
                    >
                        <img src={scrollDownIcon} alt="Down Arrow" />
                    </button>
                </div>
            </section>
            
            {/* Services section */}
            <section ref={servicesRef} className="w-full h-screen">
                <div className="w-full h-full flex items-center justify-center">
                    <h1 className="text-4xl font-bold">Our Services</h1>  
                </div>
            </section>
        </div>
    );
});

export default LandingPage;