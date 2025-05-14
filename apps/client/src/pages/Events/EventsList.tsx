import { Footer, Header } from '@/components/core';
import React, { memo, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { hikingEvents } from './events.data';
import EventCard from './components/EventCard';
import ViewToggle from './components/ViewToggle';
import EventFilters, { EventFilterOptions } from './components/EventFilters';
import { filterEvents } from './utils/filter.utils';
import { useTranslation } from 'react-i18next';

const EventsList: React.FC = () => {
    const { t } = useTranslation();
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const navigate = useNavigate();
    const [filters, setFilters] = useState<EventFilterOptions>({
        search: '',
        difficultyLevel: 'all',
        priceRange: 'all',
        distanceRange: 'all',
        durationRange: 'all',
        startDate: null,
        endDate: null,
        status: 'all',
    });

    const handleViewModeToggle = () => {
        setViewMode(viewMode === 'grid' ? 'list' : 'grid');
    };

    const handleEventClick = (eventId: string) => {
        navigate(`/events/${eventId}`);
    };

    const handleFiltersChange = (newFilters: EventFilterOptions) => {
        setFilters(newFilters);
    };

    // Use the imported filterEvents utility
    const filteredEvents = useMemo(() => filterEvents(hikingEvents, filters), [hikingEvents, filters]);

    return (
        <div>
            <Header />

            <EventFilters
                filters={filters}
                onFilterChange={handleFiltersChange}
            />

            <main className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-6">{t('events.title')}</h1>

                <div className="flex justify-between items-center mb-6">
                    <div className="text-sm text-gray-500">
                        {filteredEvents.length} {t('events.eventsFound')}
                    </div>
                    <ViewToggle onToggle={handleViewModeToggle} viewMode={viewMode} setViewMode={setViewMode} />
                </div>

                {filteredEvents.length > 0 ? (
                    <div className={
                        viewMode === 'grid'
                            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                            : 'flex flex-col gap-6'
                    }>
                        {filteredEvents.map(event => (
                            <EventCard
                                key={event.id}
                                event={event}
                                viewMode={viewMode}
                                onClick={() => handleEventClick(event.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-lg text-gray-600">
                            {t('events.noResults')}
                        </p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default memo(EventsList);
