import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import types and constants
import { EventLocationMapProps } from './types';
import { routePointsOfInterest, mapLayers } from './constants';
import { createCustomIcon, getMapSettings, getAllWaypointPositions } from './utils';

// Import components
import RoutingMachineLayer from './components/RoutingMachineLayer';
import MapControls from './components/MapControls';
import RouteInfoSidebar from './components/RouteInfoSidebar';
import SidebarToggleButton from './components/SidebarToggleButton';

const EventLocationMap: React.FC<EventLocationMapProps> = ({
    name,
    showMestiaToUshguliRoute: showRoute = false,
    event
}) => {
    // Get the initial coordinates and create a reference position
    const initialLat = event.itinerary[0].waypoints[0].coordinates.latitude;
    const initialLng = event.itinerary[0].waypoints[0].coordinates.longitude;
    const position: [number, number] = [initialLat, initialLng];

    const [mapLayer, setMapLayer] = useState('standard');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);

    // Get all waypoint positions for map centering
    const allWaypointPositions = getAllWaypointPositions(event);

    // Fix for default marker icons in React Leaflet
    useEffect(() => {
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });
    }, []);

    // Get map settings with all waypoints for proper centering
    const mapSettings = getMapSettings(position, showRoute, allWaypointPositions);

    // Function to create icon with waypoint number
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const createNumberedIcon = (point: typeof routePointsOfInterest[0], index: number) => {
        return createCustomIcon(
            point.day ? `#${Math.max(3, point.day * 2).toString(16)}b82f6` : '#3b82f6',
            point.waypointNumber ? point.waypointNumber - 1 : index
        );
    };

    return (
        <div className="relative rounded-lg overflow-hidden" style={{ height: '350px' }}>
            <MapContainer
                center={mapSettings.center}
                zoom={mapSettings.zoom}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution={mapLayers[mapLayer as keyof typeof mapLayers].attribution}
                    url={mapLayers[mapLayer as keyof typeof mapLayers].url}
                />

                {/* Conditionally render the route - no instructions in small view */}
                {showRoute && (
                    <>
                        {/* Route path */}
                        <RoutingMachineLayer
                            waypoints={routePointsOfInterest(event).map(p => p.position)}
                        />

                        {/* Only show the main markers in the small view */}
                        {routePointsOfInterest(event).map((point, index) => (
                            <Marker
                                key={index}
                                position={point.position}
                                icon={createNumberedIcon(point, index)}
                            >
                                <Popup>
                                    <strong>{point.waypointNumber}. {point.name}</strong>
                                </Popup>
                            </Marker>
                        ))}
                    </>
                )}

                {/* Regular location marker (only shown if not showing the route) */}
                {!showRoute && (
                    <Marker position={position}>
                        <Popup>
                            {name}
                        </Popup>
                    </Marker>
                )}

                <MapControls
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-expect-error
                    mapLayer={mapLayer}
                    setMapLayer={setMapLayer}
                    mapLayers={mapLayers}
                    onExpand={() => setIsModalOpen(true)}
                    lat={initialLat}
                    lng={initialLng}
                />
            </MapContainer>

            {/* Full Screen Map Modal with Sidebar */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-[90vw] w-[90vw] h-[90vh] p-0 max-h-[90vh] z-1000">
                    <div className="h-full w-full flex relative">
                        {/* Route information sidebar - only visible in modal */}
                        {showRoute && showSidebar && (
                            <RouteInfoSidebar
                                points={routePointsOfInterest(event)}
                                onClose={() => setShowSidebar(false)}
                                event={event}
                            />
                        )}

                        {/* Collapsed sidebar toggle button */}
                        {showRoute && !showSidebar && (
                            <SidebarToggleButton onClick={() => setShowSidebar(true)} />
                        )}

                        {/* Map container - adjusted width based on sidebar visibility */}
                        <div
                            className="h-full flex-grow"
                            style={{ width: showSidebar && showRoute ? 'calc(100% - 300px)' : '100%' }}
                        >
                            <MapContainer
                                center={mapSettings.center}
                                zoom={mapSettings.zoom}
                                style={{ height: '100%', width: '100%' }}
                                scrollWheelZoom={true}
                                zoomControl={true}
                            >
                                <TileLayer
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    //@ts-expect-error
                                    attribution={mapLayers[mapLayer].attribution}
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    //@ts-expect-error
                                    url={mapLayers[mapLayer].url}
                                />

                                {/* Conditionally render the route in modal */}
                                {showRoute && (
                                    <>
                                        {/* Route without instructions */}
                                        <RoutingMachineLayer
                                            waypoints={routePointsOfInterest(event).map(p => p.position)}
                                            modalMode={true}
                                        />

                                        {/* Enhanced markers for the full-screen view */}
                                        {routePointsOfInterest(event).map((point, index) => (
                                            <Marker
                                                key={`modal-${index}`}
                                                position={point.position}
                                                icon={createNumberedIcon(point, index)}
                                            >
                                                <Popup>
                                                    <div className="text-center">
                                                        <strong className="text-lg block mb-1">
                                                            {point.waypointNumber}. {point.name}
                                                        </strong>
                                                        <p className="text-sm">{point.description}</p>
                                                        {point.day && (
                                                            <span className="inline-block mt-1 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                                                                დღე {point.day}
                                                            </span>
                                                        )}
                                                        {point.facilities && point.facilities.length > 0 && (
                                                            <div className="mt-2 text-xs">
                                                                <p className="font-medium mb-1">აღჭურვილობა:</p>
                                                                <div className="flex flex-wrap gap-1 justify-center">
                                                                    {point.facilities.map((facility, idx) => (
                                                                        <span key={idx} className="bg-gray-100 px-2 py-0.5 rounded">
                                                                            {facility}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </Popup>
                                            </Marker>
                                        ))}
                                    </>
                                )}

                                {/* Regular location marker (only shown if not showing the route) */}
                                {!showRoute && (
                                    <Marker position={position}>
                                        <Popup>
                                            <div className="text-center">
                                                <strong className="text-lg block">{name}</strong>
                                            </div>
                                        </Popup>
                                    </Marker>
                                )}

                                <MapControls
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    //@ts-expect-error
                                    mapLayer={mapLayer}
                                    setMapLayer={setMapLayer}
                                    mapLayers={mapLayers}
                                    onExpand={() => setIsModalOpen(false)}
                                    lat={initialLat}
                                    lng={initialLng}
                                    isModal={true}
                                />
                            </MapContainer>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    );
};

export default EventLocationMap;
