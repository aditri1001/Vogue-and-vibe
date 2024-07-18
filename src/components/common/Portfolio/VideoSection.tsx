import React from 'react';

const videos = [
    { title: 'Intro', url: 'path-to-video1.mp4' },
    { title: 'Walk', url: 'path-to-video2.mp4' },

];

const VideoSection: React.FC = () => {
    return (
        <section className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {videos.map((video, index) => (
                    <div key={index}>
                        <video controls className="w-full">
                            <source src={video.url} type="video/mp4" />
                        </video>
                        <p className="mt-2 text-center text-5xl">{video.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoSection;