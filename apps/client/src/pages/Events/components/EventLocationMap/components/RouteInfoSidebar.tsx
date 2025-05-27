import React, { useState } from 'react';
import { X, CalendarDays, Clock, ArrowRight, Coffee } from 'lucide-react';
import { PointOfInterest } from '../types';
import { getIndexedWaypoints } from './utils';
import { HikingEvent } from '@/pages/Events/types';

interface ItinerarySidebarProps {
    points: PointOfInterest[];
    onClose: () => void;
    event: HikingEvent
}

const RouteInfoSidebar: React.FC<ItinerarySidebarProps> = ({ onClose, event }) => {
    const [selectedDay, setSelectedDay] = useState<number | null>(1);
    const { itinerary } = event;

    // Create a map of waypoint names to their global indices
    const waypointIndices = new Map(
        getIndexedWaypoints(event).map(wp => [wp.name, wp.globalIndex])
    );

    const formatDate = (date: Date): string => {
        return new Intl.DateTimeFormat('ka-GE', {
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    return (
        <div className="w-[300px] h-full bg-white shadow-lg flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
                    <X size={20} />
                </button>
            </div>

            {/* Day selector */}
            <div className="flex overflow-x-auto p-2 gap-2 border-b">
                {itinerary.map(day => (
                    <button
                        key={day.dayNumber}
                        onClick={() => setSelectedDay(day.dayNumber)}
                        className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${selectedDay === day.dayNumber
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        დღე {day.dayNumber}
                    </button>
                ))}
            </div>

            {/* Day details */}
            <div className="flex-1 overflow-y-auto p-4">
                {selectedDay !== null && (
                    <>
                        {/* Current day info */}
                        <div className="mb-4">
                            <div className="flex items-start gap-2 mb-3">
                                <CalendarDays className="text-blue-500 mt-1" size={16} />
                                <div>
                                    <h4 className="font-semibold">დღე {selectedDay}</h4>
                                    <p className="text-sm text-gray-600">
                                        {itinerary[selectedDay - 1].description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 text-sm my-3">
                                <div className="flex items-center gap-1">
                                    <ArrowRight size={16} className="text-gray-600" />
                                    <span>{itinerary[selectedDay - 1].distanceCovered} კმ</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={16} className="text-gray-600" />
                                    <span>~{itinerary[selectedDay - 1].estimatedTime} სთ</span>
                                </div>
                            </div>
                        </div>

                        {/* Waypoints */}
                        <div className="space-y-4">
                            <h5 className="font-semibold border-b pb-1">გასავლელი პუნქტები:</h5>
                            {itinerary[selectedDay - 1].waypoints.map((waypoint, idx) => (
                                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                                    <div className="flex justify-between items-start mb-1">
                                        <h6 className="font-medium flex items-center gap-1">
                                            <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                                {waypointIndices.get(waypoint.name)}
                                            </div>
                                            {waypoint.name}
                                        </h6>
                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                                            {formatDate(waypoint.estimatedArrivalTime)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{waypoint.description}</p>
                                    {waypoint.facilities.length > 0 && (
                                        <div className="mt-2">
                                            <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                                                <Coffee size={14} />
                                                <span>აღჭურვილობა:</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {waypoint.facilities.map((facility, fidx) => (
                                                    <span
                                                        key={fidx}
                                                        className="text-xs bg-gray-100 px-2 py-0.5 rounded"
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
                    </>
                )}
            </div>

            <div className="p-3 border-t bg-gray-50 text-center text-xs text-gray-600">
                სულ მანძილი: {itinerary.reduce((acc, day) => acc + day.distanceCovered, 0)} კმ |
                დრო: ~{itinerary.reduce((acc, day) => acc + day.estimatedTime, 0)} სთ
            </div>
        </div>
    );
};

export default RouteInfoSidebar;
