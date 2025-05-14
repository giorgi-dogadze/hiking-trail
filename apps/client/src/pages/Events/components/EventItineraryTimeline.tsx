import React, { useState } from 'react';
import { format } from 'date-fns';
import { enUS, ka } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface ItineraryItem {
    dayNumber: number;
    description: string;
    distanceCovered: number;
    estimatedTime: number;
    waypoints: {
        name: string;
        description: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
        estimatedArrivalTime: Date;
        facilities: string[];
        isRestPoint: boolean;
    }[];
}

interface EventItineraryTimelineProps {
    itinerary: ItineraryItem[];
}

const EventItineraryTimeline: React.FC<EventItineraryTimelineProps> = ({ itinerary }) => {
    const [expandedDays, setExpandedDays] = useState<number[]>([1]); // Default expand first day
    const { t, i18n } = useTranslation();

    const currentLocale = i18n.language === 'ka' ? ka : enUS;

    const toggleDay = (dayNumber: number) => {
        setExpandedDays(prev =>
            prev.includes(dayNumber)
                ? prev.filter(d => d !== dayNumber)
                : [...prev, dayNumber]
        );
    };

    const formatTime = (date: Date) => {
        return format(date, 'p', { locale: currentLocale });
    };

    return (
        <div className="space-y-6">
            {itinerary.map((day, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div
                        className={`flex justify-between items-center p-4 cursor-pointer ${expandedDays.includes(day.dayNumber) ? 'bg-blue-50' : 'bg-white'
                            }`}
                        onClick={() => toggleDay(day.dayNumber)}
                    >
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                                {day.dayNumber}
                            </div>
                            <div>
                                <h3 className="font-semibold">{t('events.day')} {day.dayNumber}</h3>
                                <div className="text-sm text-gray-600 flex items-center mt-1">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {day.estimatedTime} {t('trail.hours')} • {day.distanceCovered} {t('events.filters.km')}
                                </div>
                            </div>
                        </div>
                        {expandedDays.includes(day.dayNumber) ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                    </div>

                    {expandedDays.includes(day.dayNumber) && (
                        <div className="p-4 bg-white border-t border-gray-200">
                            <p className="mb-4 text-gray-700">{day.description}</p>

                            <h4 className="font-semibold text-sm text-gray-600 uppercase mt-4 mb-3">
                                {t('events.waypoints')}
                            </h4>

                            <div className="space-y-4">
                                {day.waypoints.map((waypoint, wIndex) => (
                                    <div key={wIndex} className="relative pl-6 pb-4 border-l-2 border-gray-300 last:border-0">
                                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                            <h5 className="font-semibold">{waypoint.name}</h5>
                                            <div className="text-sm text-gray-600 flex items-center mt-1 sm:mt-0">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {formatTime(waypoint.estimatedArrivalTime)}
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-700 mb-2">{waypoint.description}</p>

                                        {waypoint.facilities.length > 0 && (
                                            <div className="mt-2">
                                                <h6 className="text-xs text-gray-500 mb-1">{t('trail.facilities.title')}</h6>
                                                <div className="flex flex-wrap gap-1">
                                                    {waypoint.facilities.map((facility, fIndex) => (
                                                        <span
                                                            key={fIndex}
                                                            className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                                                        >
                                                            {facility}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default EventItineraryTimeline;
