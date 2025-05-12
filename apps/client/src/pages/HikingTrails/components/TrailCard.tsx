import React from 'react';
import {
    ChevronUpIcon,
    ChevronDownIcon,
    Clock,
    MapPin
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    DifficultyLevel,
    HikingTrail,
    TrailType
} from '../types';

interface TrailCardProps {
    trail: HikingTrail;
    viewMode: 'grid' | 'list';
    onClick: (trailId: number) => void;
}

export const TrailCard: React.FC<TrailCardProps> = ({ trail, viewMode, onClick }) => {
    const handleClick = () => {
        onClick(trail.id);
    };

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


    const getTrailTypeIcon = (type: TrailType) => {
        switch (type) {
            case TrailType.Loop:
                return (
                    <span className="flex items-center text-xs">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 3v4h-4M7 21v-4h4M3 7l4-4M21 17l-4 4M3 17l4 4M21 7l-4-4" />
                        </svg>
                        {type}
                    </span>
                );
            case TrailType.OutAndBack:
                return (
                    <span className="flex items-center text-xs">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12h18M9 6l-6 6 6 6" />
                        </svg>
                        {type}
                    </span>
                );
            case TrailType.PointToPoint:
                return (
                    <span className="flex items-center text-xs">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 16l4 4 4-4M7 20V4M14 8l4-4 4 4M18 4v16" />
                        </svg>
                        {type}
                    </span>
                );
            case TrailType.Linear:
                return (
                    <span className="flex items-center text-xs">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14" />
                        </svg>
                        {type}
                    </span>
                );
            default:
                return <span>{type}</span>;
        }
    };

    return (
        <Card
            className={`overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer ${viewMode === 'list' ? 'flex flex-row h-[275px]' : 'h-full '
                }`}
            onClick={handleClick}
        >
            <div
                className={`overflow-hidden ${viewMode === 'list' ? 'w-1/3' : 'h-48'
                    }`}
            >
                <img
                    src={trail.image}
                    alt={trail.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                        e.currentTarget.src = `../../../assets/HikingRoutes/Borjomi-Kharagauli Trail.jpg`;
                    }}
                />
            </div>

            <div className={`flex flex-col ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                <CardHeader className="pb-2">
                    <div className="flex justify-between">
                        <h3 className="font-bold text-lg line-clamp-1">{trail.title}</h3>
                        <div className={`px-3 py-1 rounded-full text-xs ${getDifficultyColor(trail.difficulty.level)}`}>
                            <div className="flex items-center">
                                {trail.difficulty.level}
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" /> {trail.region}
                    </div>
                </CardHeader>

                <CardContent className="pb-2">
                    {viewMode === 'list' && (
                        <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                            {trail.description}
                        </p>
                    )}

                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                            <span className="font-medium mr-1">Length:</span>
                            {trail.length} {trail.lengthUnit}
                        </div>

                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>
                                {trail.estimatedTime.minimum}-{trail.estimatedTime.maximum} {trail.estimatedTime.timeUnit}
                            </span>
                        </div>

                        <div className="flex items-center">
                            <ChevronUpIcon className="w-4 h-4 mr-1 text-green-600" />
                            <span>{trail.heightUp}{trail.elevationUnit}</span>
                            <ChevronDownIcon className="w-4 h-4 ml-2 mr-1 text-red-600" />
                            <span>{trail.heightDown}{trail.elevationUnit}</span>
                        </div>

                        <div>
                            {getTrailTypeIcon(trail.trailType)}
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="pt-2">
                    <Button variant="outline" className="w-full text-sm">
                        View Details
                    </Button>
                </CardFooter>
            </div>
        </Card>
    );
};

export default TrailCard;
