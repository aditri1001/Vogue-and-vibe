import React from 'react';
import heroImage from "../../../assets/images/68faf0680d68ef3ee3911268663f46eb.png"
const Hero: React.FC = () => {
    return (
        <section >
            <img
                src={heroImage}
                alt="Hero"
                className="w-full h-[53rem] object-cover"
            />
            <div className="flex justify-between items-center  py-4 px-44">
                <span className="text-lg font-semibold mr-5">HEIGHT</span>
                <span className="text-lg font-semibold  mr-5">CHEST</span>
                <span className="text-lg font-semibold  mr-5">WAIST</span>
                <span className="text-lg font-semibold  mr-5">SHOE</span>
                <span className="text-lg font-semibold  mr-5">EYE</span>
                <span className="text-lg font-semibold  mr-5">HAIR</span>
            </div>
            <header className="flex justify-between items-center space-x-4 px-24">
               
                <div className="flex justify-center items-center space-x-4">
                <div>
                    <h1 className=" text-9xl font-bodoni-moda">S2</h1>
                </div>
                <div className="">
                    <div className='text-left'>
                        <h1 className="  text-5xl font-bodoni-moda">TALENTS & EVENTS</h1>
                      
                        <hr className="border-red-500 ml-2 w-" style={{ borderTopWidth: '3px' }} />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-left">TEZ</h1>
                    <span>Mumbai,India</span>
                    </div>
                
            </header>
        </section>
    );
};

export default Hero;