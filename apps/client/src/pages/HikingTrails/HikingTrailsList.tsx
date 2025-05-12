import { Footer, Header } from '@/components/core';
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trails } from './trails.data';
import TrailCard from './components/TrailCard';
import ViewToggle from './components/ViewToggle';

const HikingTrailsList: React.FC = () => {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const navigate = useNavigate();

    const handleViewModeToggle = () => {
        setViewMode(viewMode === 'grid' ? 'list' : 'grid');
    };

    const handleTrailClick = (trailId: number) => {
        navigate(`/hiking-trails/${trailId}`);
    };

    return (
        <div>
            <Header />

            <main className="container mx-auto py-8 px-4">
                <ViewToggle onToggle={handleViewModeToggle} viewMode={viewMode} setViewMode={setViewMode} />

                <div className={
                    viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'flex flex-col gap-6'
                }>
                    {trails.map(trail => (
                        <TrailCard
                            key={trail.id}
                            trail={trail}
                            viewMode={viewMode}
                            onClick={handleTrailClick}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default memo(HikingTrailsList);
