import React from 'react';
import p11 from "../Portfolio/showImages/p11.png"
const shows = [
  p11,
   
    // Add more show images here
];

const ShowsSection: React.FC = () => {
    return (
        <section className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-7">Shows</h2>
            <div className="mx-[-88px] ">
                {shows.map((show, index) => (
                    <div key={index} >
                        <img src={show} alt={`Show ${index}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShowsSection;