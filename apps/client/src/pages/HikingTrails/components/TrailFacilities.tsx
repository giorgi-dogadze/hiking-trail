import React from 'react';
import { Droplets } from 'lucide-react';
import { HikingTrail } from '../types';

interface TrailFacilitiesProps {
    facilities: HikingTrail['facilities'];
}

export const TrailFacilities: React.FC<TrailFacilitiesProps> = ({ facilities }) => {
    return (
        <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Facilities</h3>
            <div className="space-y-3">
                <div className="flex items-center">
                    <Droplets className="w-4 h-4 mr-2" />
                    <div>
                        <p className="text-sm font-medium">Water</p>
                        <p className="text-sm text-gray-600">{facilities.waterAvailability}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="mt-0.5">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Restrooms</p>
                        <p className="text-sm text-gray-600">
                            {typeof facilities.restroomAccess === 'boolean'
                                ? facilities.restroomAccess ? 'Available' : 'Not available'
                                : facilities.restroomAccess}
                        </p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="mt-0.5">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Parking</p>
                        <p className="text-sm text-gray-600">
                            {typeof facilities.parkingAvailable === 'boolean'
                                ? facilities.parkingAvailable ? 'Available' : 'Not available'
                                : facilities.parkingAvailable}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailFacilities;
