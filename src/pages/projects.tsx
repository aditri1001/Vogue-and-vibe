import React from 'react';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
import Projects from '../components/common/OurProjects/projects';
import MoreButton from '../components/common/OurProjects/More';

const projects: React.FC = () => {
    return (
        <div className="App">
            {/* <Navbar /> */}
            {/* <Header /> */}
            <Projects />
            <MoreButton />
        </div>
    );
};

export default projects;