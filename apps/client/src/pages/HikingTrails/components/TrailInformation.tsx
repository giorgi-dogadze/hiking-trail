import React from 'react';
import { ChevronUpIcon, ChevronDownIcon, Clock } from 'lucide-react';
import { DifficultyLevel, HikingTrail } from '../types';

interface TrailInformationProps {
    trail: HikingTrail;
}

export const TrailInformation: React.FC<TrailInformationProps> = ({ trail }) => {
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
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Trail Information</h3>
            <div className="space-y-4">
                <div>
                    <p className="text-sm text-gray-500">Trail Type</p>
                    <p className="font-medium">{trail.trailType}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Length</p>
                    <p className="font-medium">{trail.length} {trail.lengthUnit}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Elevation</p>
                    <div className="flex items-center">
                        <ChevronUpIcon className="w-5 h-5 mr-1 text-green-600" />
                        <span className="font-medium">{trail.heightUp}{trail.elevationUnit}</span>
                        <ChevronDownIcon className="w-5 h-5 ml-4 mr-1 text-red-600" />
                        <span className="font-medium">{trail.heightDown}{trail.elevationUnit}</span>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Estimated Time</p>
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-medium">
                            {trail.estimatedTime.minimum}-{trail.estimatedTime.maximum} {trail.estimatedTime.timeUnit}
                        </span>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Difficulty</p>
                    <div className="flex items-center">
                        <span
                            className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(trail.difficulty.level)}`}
                        >
                            {trail.difficulty.level}
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                            (Recommended for {trail.difficulty.recommendedExperience})
                        </span>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Terrain</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {trail.terrain.map((item, i) => (
                            <span key={i} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailInformation;
