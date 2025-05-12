import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { DifficultyLevel } from '../types';

interface TrailDetailHeaderProps {
    title: string;
    region: string;
    difficulty: DifficultyLevel;
}

export const TrailDetailHeader: React.FC<TrailDetailHeaderProps> = ({ title, region, difficulty }) => {
    const getDifficultyColor = (level: DifficultyLevel) => {
        switch (level) {
            case DifficultyLevel.Easy:
                return 'bg-green-100 text-green-800';
            case DifficultyLevel.Moderate:
                return 'bg-yellow-100 text-yellow-800';
            case DifficultyLevel.Difficult:
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="mb-6">
            <Link to="/hiking-trails" className="flex items-center text-primary hover:underline mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Trails
            </Link>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-gray-600" />
                    <span className="text-gray-600">{region}</span>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(difficulty)}`}>
                    {difficulty}
                </div>
            </div>
        </div>
    );
};

export default TrailDetailHeader;
