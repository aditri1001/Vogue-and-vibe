import React from 'react';

const photographers = [
    { name: 'Rahul Singh', country: 'India', image: 'url-to-image1' },
    { name: 'Rahul Singh', country: 'India', image: 'url-to-image2' },
    { name: 'Rahul Singh', country: 'India', image: 'url-to-image3' },
];

const Photographers: React.FC = () => {
    return (
        <div className="p-4 w-full h-full">
            <h1 className="text-3xl font-bold mb-4 text-center">Photographers</h1>
            <div className="flex w-full">
                <div>
                    <div className='w-1/2 h-1/2 bg-black'></div>
                </div>
                <div>
                    <div className='w-1/2 h-1/2  bg-black'></div>
                    <div className='w-1/2 h-1/2  bg-black'></div>
                </div>
            </div>
        </div>
    );
};

export default Photographers;