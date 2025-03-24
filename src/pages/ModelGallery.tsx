import Navbar from '../components/common/Navbar/Navbar';
import React from 'react';
import '../styles/About-ShowModel.css'

const models = [
    { name: "Paul J.Son", country: "Mexico", imageUrl: "https://via.placeholder.com/150" },
    { name: "Paul J.Son", country: "Mexico", imageUrl: "https://via.placeholder.com/150" },
    { name: "Paul J.Son", country: "Mexico", imageUrl: "https://via.placeholder.com/150" },
    { name: "Paul J.Son", country: "Mexico", imageUrl: "https://via.placeholder.com/150" },
    { name: "Paul J.Son", country: "Mexico", imageUrl: "https://via.placeholder.com/150" },
    { name: "Paul J.Son", country: "Mexico", imageUrl: "https://via.placeholder.com/150" },
    { name: "Paul J.Son", country: "Mexico", imageUrl: "https://via.placeholder.com/150" },
    { name: "Paul J.Son", country: "Mexico", imageUrl: "https://via.placeholder.com/150" },
];

const ModelGallery: React.FC = () => {
    return (
        <div className="p-4">
            <div className='ml-10 mr-10'>
                <Navbar />
            </div>
            <header className="flex w-full justify-center items-center space-x-4">
                <div>
                    <h1 className="text-9xl font-bodoni-moda">S2</h1>
                </div>
                <div>
                    <div className='text-left'>
                        <h1 className="text-5xl font-bodoni-moda">TALENTS & EVENTS</h1>
                        <h2 className="text-5xl font-bold text-red-500 font-inria-serif ">MODEL</h2>
                        <hr className="border-red-500 w-44" style={{ borderTopWidth: '3px' }} />
                    </div>
                </div>
            </header>
            <div className="grid grid-cols-1 xs:grid-cols-2 xs:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4 gap-16 mt-16 ml-10 mr-10 w-full">
                {models.map((model, index) => (
                    <div key={index} className="items-center mb-10 w-full">
                        <img src={model.imageUrl} alt={`${model.name}`} className="w-4/5 h-full" />
                        <div className="mt-5  text-left flex justify-between w-4/5">
                            <div>
                                <p className="font-semibold text-base lg:text-2xl">{model.name}</p>
                                <p className="text-red-500 font-semibold text-base lg:text-2xl">{model.country}</p>
                            </div>
                            <div>
                                <img src='src/assets/icons/showModel/instagram_.png' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="text-center mt-20 mb-10">
                <p className='color'>All Rights Reserved©S2modelss.pvt 2024-25</p>
            </footer>
        </div>
    );
}

export default ModelGallery;
