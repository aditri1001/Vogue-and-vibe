import React from 'react';
import p1 from "../Portfolio/showImages/p1.png";
import p2 from "../Portfolio/showImages/p2.png";
import p3 from "../Portfolio/showImages/p3.png";
import p4 from "../Portfolio/showImages/p4.png";
import p5 from "../Portfolio/showImages/p5.png";
import p6 from "../Portfolio/showImages/p6.png";
import p7 from "../Portfolio/showImages/p7.png";
import p8 from "../Portfolio/showImages/p8.png";
import p9 from "../Portfolio/showImages/p9.png";
import p10 from "../Portfolio/showImages/p10.png";

const photos = [
    { src: p1, colSpan: 3, width: 'full', height: '640', objectFit: 'cover' },
    { src: p2, colSpan: 1, width: 'full', height: '640', objectFit: 'cover' },
    { src: p3, colSpan: 1, width: 'full', height: '640', objectFit: 'cover' },
    { src: p4, colSpan: 1, width: 'full', height: '640', objectFit: 'cover' },
    { src: p5, colSpan: 2, width: 'full', height: '640', objectFit: 'none' },
    { src: p6, colSpan: 1, width: 'full', height: '640', objectFit: 'cover' },
    { src: p7, colSpan: 1, width: 'full', height: '640', objectFit: 'cover' },
    { src: p8, colSpan: 2, width: 'full', height: '640', objectFit: 'cover' },
    { src: p9, colSpan: 2, width: 'full', height: '640', objectFit: 'cover' },
    { src: p10, colSpan: 2, width: 'full', height: '640', objectFit: 'cover' },
];

const PhotoGallery: React.FC = () => {
    return (
        <section className="container mx-auto py-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`p-2 ${photo.colSpan === 1 ? 'col-span-1' : photo.colSpan === 2 ? 'col-span-2' : photo.colSpan === 3 ? 'col-span-3' : 'col-span-1'}`}
                    >
                        <img
                            src={photo.src}
                            alt={`Gallery ${index}`}
                            className={`w-${photo.width} h-full ${photo.objectFit ? `object-${photo.objectFit}` : 'object-cover'}`}
                            style={{ height: `${photo.height}px` }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotoGallery;
