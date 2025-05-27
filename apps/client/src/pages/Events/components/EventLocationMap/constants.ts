import { HikingEvent } from "../../types";
import { getIndexedWaypoints } from "./components/utils";
import { MapLayerConfig, PointOfInterest, MapLayerType } from "./types";

// Generate route points of interest from itinerary data with indices
export const routePointsOfInterest = (
  event: HikingEvent
): PointOfInterest[] => {
  return getIndexedWaypoints(event).map((waypoint) => ({
    position: [
      waypoint.coordinates.latitude,
      waypoint.coordinates.longitude,
    ] as [number, number],
    name: waypoint.name,
    description: waypoint.description,
    day: event.itinerary.find((day) =>
      day.waypoints.some((wp) => wp.name === waypoint.name)
    )?.dayNumber,
    estimatedArrivalTime: waypoint.estimatedArrivalTime,
    facilities: waypoint.facilities,
    isRestPoint: waypoint.isRestPoint,
    waypointNumber: waypoint.globalIndex,
  }));
};
// Map layer configurations
export const mapLayers: Record<MapLayerType, MapLayerConfig> = {
  standard: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    name: "Standard",
  },
  topographic: {
    url: "https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38",
    attribution:
      '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    name: "Topographic",
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    name: "Satellite",
  },
};
