import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

interface RoutingMachineLayerProps {
    waypoints: [number, number][];
    modalMode?: boolean;
}

const RoutingMachineLayer: React.FC<RoutingMachineLayerProps> = ({
    waypoints,
    modalMode = false
}) => {
    const map = useMap();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const routingControlRef = useRef<L.Routing.Control | null>(null);

    useEffect(() => {
        if (!map) return;

        if (routingControlRef.current) {
            map.removeControl(routingControlRef.current);
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        const routingControl = L.Routing.control({
            waypoints: waypoints.map(([lat, lng]) => L.latLng(lat, lng)),
            routeWhileDragging: false,
            showAlternatives: false,
            lineOptions: {
                styles: [{ color: '#3b82f6', opacity: 0.8, weight: 5 }],
            },
            fitSelectedRoutes: modalMode,
            addWaypoints: false,
            draggableWaypoints: false,
            createMarker: () => null,
            show: false, // hides the default instructions panel
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            router: L.Routing.osrmv1({}),
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            plan: L.Routing.plan(waypoints.map(([lat, lng]) => L.latLng(lat, lng)), {
                createMarker: () => null,
            }),
            containerClassName: 'hidden' // hides the container div
        }).addTo(map);

        routingControlRef.current = routingControl;

        return () => {
            if (routingControlRef.current) {
                map.removeControl(routingControlRef.current);
            }
        };
    }, [map, waypoints, modalMode]);

    return null;
};

export default RoutingMachineLayer;
