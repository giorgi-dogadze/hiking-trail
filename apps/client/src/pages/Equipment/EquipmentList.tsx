import React, { memo, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Footer, Header } from '@/components/core';
import { equipments } from './equipments.data';
import EquipmentCard from './components/EquipmentCard';
import ViewToggle from '../HikingTrails/components/ViewToggle';
import EquipmentFilters, { EquipmentFilterOptions } from './components/EquipmentFilters';
import { filterEquipments } from './utils/equipment-filter.utils';

const EquipmentList: React.FC = () => {
    const { t } = useTranslation();
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const navigate = useNavigate();
    const [filters, setFilters] = useState<EquipmentFilterOptions>({
        search: '',
        category: 'all',
        brand: 'all',
        seasonRating: 'all',
        priceRange: 'all',
        availability: 'all',
    });

    const handleViewModeToggle = () => {
        setViewMode(viewMode === 'grid' ? 'list' : 'grid');
    };

    const handleEquipmentClick = (equipmentId: string) => {
        navigate(`/equipment/${equipmentId}`);
    };

    const handleFiltersChange = (newFilters: EquipmentFilterOptions) => {
        setFilters(newFilters);
    };

    const filteredEquipment = useMemo(() =>
        filterEquipments(equipments, filters),
        [filters]
    );

    return (
        <div>
            <Header />

            <EquipmentFilters
                filters={filters}
                onFilterChange={handleFiltersChange}
            />

            <main className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    {t('equipment.title')}
                </h1>

                <ViewToggle
                    onToggle={handleViewModeToggle}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />

                {filteredEquipment.length > 0 ? (
                    <div className={
                        viewMode === 'grid'
                            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                            : 'flex flex-col gap-6'
                    }>
                        {filteredEquipment.map(item => (
                            <EquipmentCard
                                key={item.id}
                                equipment={item}
                                viewMode={viewMode}
                                onClick={handleEquipmentClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-lg text-gray-600">
                            {t('equipment.noResults')}
                        </p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default memo(EquipmentList);
