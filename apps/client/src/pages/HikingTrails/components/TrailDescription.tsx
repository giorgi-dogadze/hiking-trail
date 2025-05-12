import React from 'react';

interface TrailDescriptionProps {
    description: string;
    image: string;
    title: string;
}

const TrailDescription: React.FC<TrailDescriptionProps> = ({ description, image, title }) => {
    return (
        <>
            <div className="mb-8 rounded-xl overflow-hidden h-[400px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = `../../../assets/HikingRoutes/Borjomi-Kharagauli Trail.jpg`;
                    }}
                />
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {description}
                </p>
            </div>
        </>
    );
};

export default TrailDescription;
