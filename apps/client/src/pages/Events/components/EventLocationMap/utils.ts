import L from 'leaflet';
import { HikingEvent } from '../../types';

// Helper to create a custom icon with a number
export const createCustomIcon = (color: string, index: number) => {
  const html = `<div class="flex items-center justify-center rounded-full w-6 h-6 text-white font-bold text-xs" style="background-color: ${color}">${
    index + 1
  }</div>`;
  
  return L.divIcon({
    html: html,
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

// Get map settings based on whether we're showing a route or single point
export const getMapSettings = (position: [number, number], showRoute = false, waypoints?: [number, number][]) => {
  // If showing a route with waypoints, calculate the center
  if (showRoute && waypoints && waypoints.length > 0) {
    const bounds = L.latLngBounds(waypoints.map(wp => L.latLng(wp[0], wp[1])));
    const center = bounds.getCenter();
    return {
      center: [center.lat, center.lng] as [number, number],
      zoom: 10,
    };
  }
  
  // Otherwise center on the provided position
  return {
    center: position,
    zoom: showRoute ? 10 : 13,
  };
};

// Helper to calculate map center from waypoints
export const calculateMapCenter = (waypoints: [number, number][]): [number, number] => {
  if (!waypoints.length) return [0, 0];
  
  // Calculate bounds of all waypoints
  const bounds = L.latLngBounds(waypoints.map(wp => L.latLng(wp[0], wp[1])));
  const center = bounds.getCenter();
  
  return [center.lat, center.lng];
};

// Open location in Google Maps
export const openInGoogleMaps = (lat: number, lng: number): void => {
  window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
};

// Helper function to get all waypoints with their global indices
export const getIndexedWaypoints = (event: HikingEvent) => {
  let waypointIndex = 0;
  return event.itinerary.flatMap(day => 
    day.waypoints.map(waypoint => ({
      ...waypoint,
      globalIndex: ++waypointIndex
    }))
  );
};

// Helper to get all waypoint positions as [lat, lng] array
export const getAllWaypointPositions = (event: HikingEvent): [number, number][] => {
  return getIndexedWaypoints(event).map(waypoint => 
    [waypoint.coordinates.latitude, waypoint.coordinates.longitude]
  );
};
