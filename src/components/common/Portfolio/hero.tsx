import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="pt-16">
            <img
                src="path-to-hero-image.jpg"
                alt="Hero"
                className="w-full h-96 object-cover"
            />
            <div className="text-center mt-4">
                <h1 className="text-4xl font-bold">TEZ</h1>
                <p>Height, Chest, Waist, Shoe, Eye, Hair</p>
            </div>
        </section>
    );
};

export default Hero;