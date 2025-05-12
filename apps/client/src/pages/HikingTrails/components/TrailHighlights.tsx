import React from 'react';
import { useTranslation } from 'react-i18next';

interface TrailHighlightsProps {
    highlights: string[];
}

export const TrailHighlights: React.FC<TrailHighlightsProps> = ({ highlights }) => {
    const { t } = useTranslation();

    if (!highlights || highlights.length === 0) return null;

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t(`highlights`)}</h2>
            <div className="flex flex-wrap gap-2">
                {highlights.map((highlight, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                        {highlight}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TrailHighlights;
