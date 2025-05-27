import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Categories, SeasonRating, AvailabilityStatus } from '../equipments.data';
import { equipments } from '../equipments.data';

export interface EquipmentFilterOptions {
    search: string;
    category: string;
    brand: string;
    seasonRating: string;
    priceRange: string;
    availability: string;
}

interface EquipmentFiltersProps {
    filters: EquipmentFilterOptions;
    onFilterChange: (filters: EquipmentFilterOptions) => void;
}

const EquipmentFilters: React.FC<EquipmentFiltersProps> = ({ filters, onFilterChange }) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    // Extract unique brands from equipments
    const brands = [...new Set(equipments.map(item => item.brandId))];

    // Define price ranges
    const priceRanges = [
        { id: 'all', label: t('equipment.filters.allPrices') },
        { id: 'under100', label: t('equipment.filters.under100') },
        { id: '100to200', label: t('equipment.filters.between100and200') },
        { id: '200to500', label: t('equipment.filters.between200and500') },
        { id: 'over500', label: t('equipment.filters.over500') }
    ];

    // Define availability options with the correct mapping to enum values
    const availabilityOptions = [
        { id: 'all', label: t('equipment.filters.allAvailability') },
        { id: 'inStock', label: t('equipment.inStock'), value: AvailabilityStatus.IN_STOCK },
        { id: 'lowStock', label: t('equipment.lowStock'), value: AvailabilityStatus.LOW_STOCK },
        { id: 'outOfStock', label: t('equipment.outOfStock'), value: AvailabilityStatus.OUT_OF_STOCK },
        { id: 'preOrder', label: t('equipment.preOrder'), value: AvailabilityStatus.PRE_ORDER }
    ];

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange({ ...filters, search: e.target.value });
    };

    // Handle filter change
    const handleFilterChange = (key: keyof EquipmentFilterOptions, value: string) => {
        onFilterChange({ ...filters, [key]: value });
    };

    // Reset all filters
    const handleResetFilters = () => {
        onFilterChange({
            search: filters.search,
            category: 'all',
            brand: 'all',
            seasonRating: 'all',
            priceRange: 'all',
            availability: 'all'
        });
        setOpen(false);
    };

    // Create array of season options from the enum
    const seasonOptions = Object.values(SeasonRating);

    return (
        <div className='bg-[#2B6BE7] relative my-10 sm:my-4 md:my-2 xl:my-0'>
            <svg
                className="absolute top-0 left-0 w-full transform translate-y-[-98%] rotate-180"
                height="50"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1200 50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 50C300 20 900 20 1200 50V0H0V50Z"
                    fill="#2B6BE7"
                />
            </svg>

            <div className="mb-8 p-4 rounded-lg container mx-auto px-4">
                <div className="flex items-center gap-3">
                    {/* Search Box (75% width) */}
                    <div className="w-3/4">
                        <Input
                            placeholder={t('equipment.filters.searchPlaceholder')}
                            value={filters.search}
                            onChange={handleSearchChange}
                            className="w-full h-12 text-lg rounded-xl bg-white"
                        />
                    </div>

                    {/* Filters Area (25% width) */}
                    <div className="w-1/4 flex">
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full h-12 rounded-xl flex items-center justify-between bg-white"
                                >
                                    <span className="flex items-center">
                                        <Filter className="mr-2 h-4 w-4" />
                                        {t('equipment.filters.filtersButton')}
                                    </span>
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-4" align="end">
                                <div className="space-y-4">
                                    <h4 className="font-medium">{t('equipment.filters.filterOptions')}</h4>

                                    {/* Category Filter */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('equipment.filters.category')}</label>
                                        <select
                                            className="w-full p-2 border rounded-md"
                                            value={filters.category}
                                            onChange={(e) => handleFilterChange('category', e.target.value)}
                                        >
                                            <option value="all">{t('equipment.filters.allCategories')}</option>
                                            {Categories.map(category => (
                                                <option key={category.id} value={category.id}>
                                                    {t(`equipment.categories.${category.id}`, category.name)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Brand Filter */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('equipment.filters.brand')}</label>
                                        <select
                                            className="w-full p-2 border rounded-md"
                                            value={filters.brand}
                                            onChange={(e) => handleFilterChange('brand', e.target.value)}
                                        >
                                            <option value="all">{t('equipment.filters.allBrands')}</option>
                                            {brands.map(brand => (
                                                <option key={brand} value={brand}>
                                                    {brand}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Season Rating Filter - Fix: Use the enum values directly */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('equipment.filters.seasonRating')}</label>
                                        <select
                                            className="w-full p-2 border rounded-md"
                                            value={filters.seasonRating}
                                            onChange={(e) => handleFilterChange('seasonRating', e.target.value)}
                                        >
                                            <option value="all">{t('equipment.filters.allSeasons')}</option>
                                            {seasonOptions.map(season => (
                                                <option key={season} value={season}>
                                                    {t(`equipment.seasons.${season}`)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Price Range Filter */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('equipment.filters.priceRange')}</label>
                                        <select
                                            className="w-full p-2 border rounded-md"
                                            value={filters.priceRange}
                                            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                                        >
                                            {priceRanges.map(range => (
                                                <option key={range.id} value={range.id}>
                                                    {range.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Availability Filter - Fix: Use proper mapping to enum values */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('equipment.filters.availability')}</label>
                                        <select
                                            className="w-full p-2 border rounded-md"
                                            value={filters.availability}
                                            onChange={(e) => handleFilterChange('availability', e.target.value)}
                                        >
                                            {availabilityOptions.map(option => (
                                                <option key={option.id} value={option.id}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="pt-2 flex justify-between">
                                        <div></div>
                                        <Button
                                            size="sm"
                                            onClick={handleResetFilters}
                                            className="bg-[#2B6BE7] hover:bg-[#2B6BE7]/90"
                                        >
                                            {t('equipment.filters.resetFilters')}
                                        </Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                {/* Active Filters Display */}
                {(filters.category !== 'all' ||
                    filters.brand !== 'all' ||
                    filters.seasonRating !== 'all' ||
                    filters.priceRange !== 'all' ||
                    filters.availability !== 'all') && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {filters.category !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {t(`equipment.categories.${filters.category}`, Categories.find(c => c.id === filters.category)?.name || '')}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('category', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.brand !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {filters.brand}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('brand', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.seasonRating !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {t(`equipment.seasons.${filters.seasonRating}`)}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('seasonRating', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.priceRange !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {priceRanges.find(p => p.id === filters.priceRange)?.label}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('priceRange', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.availability !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {availabilityOptions.find(a => a.id === filters.availability)?.label}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('availability', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                        </div>
                    )}
            </div>
            <svg
                className="absolute bottom-0 left-0 w-full transform translate-y-[98%] rotate-180"
                height="50"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1200 150"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 0C300 120 900 120 1200 0V150H0V0Z"
                    fill="#2B6BE7"
                />
            </svg>
        </div>
    );
};

export default EquipmentFilters;
