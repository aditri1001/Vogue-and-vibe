import React from 'react';
// import Image from 'next/image';

const project: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left Section */}
                <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold">INDIAN MAGIC</h1>
                        <p className="text-2xl mt-4">gvthelenoman</p>
                        <p className="mt-2">Photographer: GVTHELENSMA (@gvthelensman)</p>
                        <p className="mt-1">Model: SIDDHANT GUPTA (@_mr_siddhantgupta)</p>
                    </div>
                    <div className="flex justify-center">
                        <img src="/path/to/image.jpg" alt="Image" className="w-full h-auto" />
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-span-1">
                    <div className="text-center">
                        <h2 className="text-lg font-bold">VOLUME 29</h2>
                        <p className="mt-4">HOW DID YOU FIRST BECOME INTERESTED IN PHOTOGRAPHY, AND WHEN DID YOU DECIDE TO PURSUE IT PROFESSIONALLY?</p>
                        <p className="mt-4">CAN YOU WALK US THROUGH YOUR THINKING PROCESS FOR A SHOOT, FROM CONCEPT TO FINAL PRODUCT?</p>
                        <p className="mt-4">WHAT DO YOU THINK ARE THE MOST IMPORTANT QUALITIES FOR A PHOTOGRAPHER TO POSSESS, AND HOW DO YOU CULTIVATE THOSE TRAITS?</p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <img src="/path/to/another-image.jpg" alt="Another Image" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default project;
