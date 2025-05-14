import React from 'react';
import { useTranslation } from 'react-i18next';

interface EventLocationMapProps {
    lat: number;
    lng: number;
    name: string;
}

const EventLocationMap: React.FC<EventLocationMapProps> = ({ lat, lng, name }) => {
    const { t } = useTranslation();

    // This is a placeholder for an actual map implementation
    // In a real application, you might use Google Maps, Leaflet, or another mapping library

    return (
        <div className="bg-gray-100 rounded-lg p-4 text-center relative" style={{ height: '300px' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 opacity-50 rounded-lg"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm text-gray-600">
                        {lat.toFixed(4)}, {lng.toFixed(4)}
                    </p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    {t('mapPlaceholder')}
                </p>
                <button className="mt-2 text-blue-600 text-sm hover:underline">
                    {t('viewOnGoogleMaps')}
                </button>
            </div>
        </div>
    );
};

export default EventLocationMap;
