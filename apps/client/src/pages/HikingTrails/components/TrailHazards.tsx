import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TrailHazardsProps {
    hazards: string[];
}

export const TrailHazards: React.FC<TrailHazardsProps> = ({ hazards }) => {
    const { t } = useTranslation();

    if (!hazards || hazards.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                {t(`hazards`)}
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
