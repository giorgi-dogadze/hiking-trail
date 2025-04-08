import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy load components
const Landing = lazy(() => import('../pages/Landing/Landing'));
const HikingTrails = lazy(() => import('../pages/HikingTrails/HikingTrailsList'));
const HikingTrailDetail = lazy(() => import('../pages/HikingTrails/HikingTrailDetail'));
const Events = lazy(() => import('../pages/Events/EventsList'));
const EventDetail = lazy(() => import('../pages/Events/EventDetail'));
const Equipment = lazy(() => import('../pages/Equipment/EquipmentList'));
const EquipmentDetail = lazy(() => import('../pages/Equipment/EquipmentDetail'));

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />

            {/* Hiking Trails Routes */}
            <Route path="/hiking-trails" element={<HikingTrails />} />
            <Route path="/hiking-trails/:id" element={<HikingTrailDetail />} />

            {/* Events Routes */}
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />

            {/* Equipment Routes */}
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/equipment/:id" element={<EquipmentDetail />} />

            {/* Redirect any unknown routes to Landing */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
