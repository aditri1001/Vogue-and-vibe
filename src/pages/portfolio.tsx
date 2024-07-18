import React from 'react';
import Navbar from '../components/common/Navbar/Navbar';
import Hero from '../components/common/Portfolio/hero';
import PhotoGallery from '../components/common/Portfolio/photoGallery';
import VideoSection from '../components/common/Portfolio/VideoSection';
import ShowsSection from '../components/common/Portfolio/ShowSection';

const Portfolio: React.FC = () => {
    return (
        <div className="font-sans bg-gray-100">
            <Navbar />
            <Hero />
            <PhotoGallery />
            <VideoSection />
            <ShowsSection />
        </div>
    );
};

export default Portfolio;