import { HikingEvent } from "../../types";

// Map layer type definition
export type MapLayerType = 'standard' | 'topographic' | 'satellite';

export interface MapLayerConfig {
    url: string;
    attribution: string;
    name: string;
}

export interface EventLocationMapProps {
    lat: number;
    lng: number;
    name: string;
    showMestiaToUshguliRoute?: boolean;
    event: HikingEvent
}

// Point of interest interface
export interface PointOfInterest {
    position: [number, number];
    name: string;
    description: string;
    day?: number;
    estimatedArrivalTime?: Date;
    facilities?: string[];
    isRestPoint?: boolean;
    waypointNumber?: number;
}

export interface ItineraryDay {
    dayNumber: number;
    description: string;
    distanceCovered: number;
    estimatedTime: number;
    waypoints: Waypoint[];
}

export interface Waypoint {
    name: string;
    description: string;
    coordinates: {
        latitude: number;
        longitude: number;
    };
    estimatedArrivalTime: Date;
    facilities: string[];
    isRestPoint: boolean;
    globalIndex?: number;
}

export interface RouteInfoSidebarProps {
    days: ItineraryDay[];
    onClose: () => void;
}
