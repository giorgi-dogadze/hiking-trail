import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface TrailHazardsProps {
    hazards: string[];
}

export const TrailHazards: React.FC<TrailHazardsProps> = ({ hazards }) => {
    if (!hazards || hazards.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                Hazards
            </h2>
            <ul className="list-disc list-inside space-y-2">
                {hazards.map((hazard, index) => (
                    <li key={index} className="text-gray-700">{hazard}</li>
                ))}
            </ul>
        </div>
    );
};

export default TrailHazards;
