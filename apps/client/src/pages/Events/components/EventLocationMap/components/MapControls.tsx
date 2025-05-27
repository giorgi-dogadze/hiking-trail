import React from 'react';
import { Expand } from 'lucide-react';
import { MapLayerType, MapLayerConfig } from '../types';
import { openInGoogleMaps } from '../utils';

interface MapControlsProps {
    mapLayer: MapLayerType;
    setMapLayer: (layer: MapLayerType) => void;
    mapLayers: Record<MapLayerType, MapLayerConfig>;
    onExpand?: () => void;
    lat: number;
    lng: number;
    isModal?: boolean;
}

const MapControls: React.FC<MapControlsProps> = ({
    mapLayer,
    setMapLayer,
    mapLayers,
    onExpand,
    lat,
    lng,
    isModal = false
}) => {
    return (
        <>
            {/* Map layer controls */}
            <div className="absolute top-2 right-2 z-500 bg-white rounded-md shadow-md">
                <div className="p-1 flex flex-row gap-1">
                    {Object.entries(mapLayers).map(([type, config]) => (
                        <button
                            key={isModal ? `modal-${type}` : type}
                            onClick={() => setMapLayer(type as MapLayerType)}
                            className={`px-2 py-1 text-xs rounded-md ${mapLayer === type
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {config.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Expand button */}
            {onExpand && (
                <button
                    onClick={onExpand}
                    className="absolute bottom-8 right-1 z-500 bg-white p-2 rounded-md shadow-md hover:bg-gray-100"
                    aria-label={isModal ? "Close expanded map" : "Expand map"}
                >
                    <Expand size={16} />
                </button>
            )}

            {/* Google Maps link */}
            <div className="cursor-pointer absolute bottom-2 left-2 right-0 bg-white p-1 text-center border-t z-500 rounded-full w-32">
                <button
                    onClick={() => openInGoogleMaps(lat, lng)}
                    className="text-blue-600 text-sm hover:underline cursor-pointer"
                >
                    Google Maps
                </button>
            </div>
        </>
    );
};

export default MapControls;
