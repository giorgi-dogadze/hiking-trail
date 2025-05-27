import { HikingEvent } from "@/pages/Events/types";

// Helper to get all waypoints with their global indices
export const getIndexedWaypoints = (event:HikingEvent) => {
    let waypointIndex = 0;
    return event.itinerary.flatMap(day => 
      day.waypoints.map(waypoint => ({
        ...waypoint,
        globalIndex: ++waypointIndex
      }))
    );
  };
  