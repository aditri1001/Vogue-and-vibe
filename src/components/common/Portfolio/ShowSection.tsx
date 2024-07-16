import React from 'react';

const shows = [
    'path-to-show-image1.jpg',
    'path-to-show-image2.jpg',
    // Add more show images here
];

const ShowsSection: React.FC = () => {
    return (
        <section className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Shows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {shows.map((show, index) => (
                    <div key={index} className="p-2">
                        <img src={show} alt={`Show ${index}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShowsSection;