import { Footer, Header } from '@/components/core';
import React, { memo, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { trails } from './trails.data';
import TrailCard from './components/TrailCard';
import ViewToggle from './components/ViewToggle';
import TrailFilters, { FilterOptions } from './components/TrailFilters';
import { filterTrails } from './utils/filter.utils';
import { useTranslation } from 'react-i18next';

const HikingTrailsList: React.FC = () => {
    const { t } = useTranslation();
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const navigate = useNavigate();
    const [filters, setFilters] = useState<FilterOptions>({
        search: '',
        difficultyLevel: 'all',
        lengthRange: 'all',
        timeRange: 'all',
        region: 'all',
    });

    const handleViewModeToggle = () => {
        setViewMode(viewMode === 'grid' ? 'list' : 'grid');
    };

    const handleTrailClick = (trailId: number) => {
        navigate(`/hiking-trails/${trailId}`);
    };

    const handleFiltersChange = (newFilters: FilterOptions) => {
        setFilters(newFilters);
    };

    // Use the imported filterTrails utility
    const filteredTrails = useMemo(() => filterTrails(trails, filters), [trails, filters]);

    return (
        <div>
            <Header />

            <TrailFilters
                filters={filters}
                onFilterChange={handleFiltersChange}
            />
            <main className="container mx-auto py-8 px-4">

                <ViewToggle onToggle={handleViewModeToggle} viewMode={viewMode} setViewMode={setViewMode} />

                {filteredTrails.length > 0 ? (
                    <div className={
                        viewMode === 'grid'
                            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                            : 'flex flex-col gap-6'
                    }>
                        {filteredTrails.map(trail => (
                            <TrailCard
                                key={trail.id}
                                trail={trail}
                                viewMode={viewMode}
                                onClick={handleTrailClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-lg text-gray-600">
                            {t('filters.noResults')}
                        </p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default memo(HikingTrailsList);
