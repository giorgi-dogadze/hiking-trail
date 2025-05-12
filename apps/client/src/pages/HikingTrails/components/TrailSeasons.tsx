import React from 'react';
import { Calendar } from 'lucide-react';
import { HikingTrail } from '../types';

interface TrailSeasonsProps {
    seasons: HikingTrail['seasons'];
}

export const TrailSeasons: React.FC<TrailSeasonsProps> = ({ seasons }) => {
    return (
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Seasons</h3>
            <div className="grid grid-cols-2 gap-2">
                <div className={`flex items-center p-2 rounded ${seasons.spring ? 'bg-green-100' : 'bg-gray-100 opacity-60'}`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Spring</span>
                </div>
                <div className={`flex items-center p-2 rounded ${seasons.summer ? 'bg-yellow-100' : 'bg-gray-100 opacity-60'}`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Summer</span>
                </div>
                <div className={`flex items-center p-2 rounded ${seasons.autumn ? 'bg-orange-100' : 'bg-gray-100 opacity-60'}`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Autumn</span>
                </div>
                <div className={`flex items-center p-2 rounded ${seasons.winter ? 'bg-blue-100' : 'bg-gray-100 opacity-60'}`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Winter</span>
                </div>
            </div>
            {seasons.bestSeason && (
                <div className="mt-4">
                    <p className="text-sm text-gray-500">Best time to visit</p>
                    <p>{seasons.bestSeason.join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default TrailSeasons;
