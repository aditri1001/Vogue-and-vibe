import React from 'react';

const photos = [
    'path-to-image1.jpg',
    'path-to-image2.jpg',
    // Add more image paths here
];

const PhotoGallery: React.FC = () => {
    return (
        <section className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                    <div key={index} className="p-2">
                        <img src={photo} alt={`Gallery ${index}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotoGallery;