import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { DifficultyLevel, Region } from '../types';
import { ChevronDown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTranslation } from 'react-i18next';

export interface FilterOptions {
    search: string;
    difficultyLevel: DifficultyLevel | 'all';
    lengthRange: string;
    timeRange: string;
    region: Region | 'all';
}

interface TrailFiltersProps {
    filters: FilterOptions;
    onFilterChange: (filters: FilterOptions) => void;
}

const TrailFilters: React.FC<TrailFiltersProps> = ({ filters, onFilterChange }) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange({ ...filters, search: e.target.value });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFilterChange = (key: keyof FilterOptions, value: any) => {
        onFilterChange({ ...filters, [key]: value });
    };

    // Distance ranges in km
    const lengthRanges = ['all', '1-10', '10-20', '20-30', '30-40', '40-50', '50+'];

    // Time ranges in hours
    const timeRanges = ['all', '1-5', '5-10', '10-15', '15+'];

    return (
        <div className='bg-[#2B6BE7] relative'>
            <svg
                className="absolute top-0 left-0 w-full transform translate-y-[-98%] rotate-180"
                height="50"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1200 50"
                xmlns="http://www.w3.org/2000/svg"
                data-qa='giorgi'
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
                            placeholder={t('filters.searchPlaceholder')}
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
                                        {t('filters.filtersButton')}
                                    </span>
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-4" align="end">
                                <div className="space-y-4">
                                    <h4 className="font-medium">{t('filters.filterOptions')}</h4>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('filters.difficulty')}</label>
                                        <Select
                                            value={filters.difficultyLevel}
                                            onValueChange={(value) => handleFilterChange('difficultyLevel', value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('filters.allDifficulties')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">{t('filters.allDifficulties')}</SelectItem>
                                                {Object.values(DifficultyLevel).map((level) => (
                                                    <SelectItem key={level} value={level}>
                                                        {t(`hikingRoutes.difficulty.${level}`)}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('filters.distance')}</label>
                                        <Select
                                            value={filters.lengthRange}
                                            onValueChange={(value) => handleFilterChange('lengthRange', value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('filters.allDistances')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {lengthRanges.map((range) => (
                                                    <SelectItem key={range} value={range}>
                                                        {range === 'all'
                                                            ? t('filters.allDistances')
                                                            : `${range} ${t('filters.km')}`
                                                        }
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('filters.duration')}</label>
                                        <Select
                                            value={filters.timeRange}
                                            onValueChange={(value) => handleFilterChange('timeRange', value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('filters.allDurations')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {timeRanges.map((range) => (
                                                    <SelectItem key={range} value={range}>
                                                        {range === 'all'
                                                            ? t('filters.allDurations')
                                                            : `${range} ${t('filters.hours')}`
                                                        }
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('filters.region')}</label>
                                        <Select
                                            value={filters.region}
                                            onValueChange={(value) => handleFilterChange('region', value as Region | 'all')}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('filters.allRegions')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">{t('filters.allRegions')}</SelectItem>
                                                {Object.values(Region).map((region) => (
                                                    <SelectItem key={region} value={region}>
                                                        {region}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="pt-2 flex justify-between">
                                        <div></div>
                                        <Button
                                            size="sm"
                                            onClick={() => {
                                                onFilterChange({
                                                    search: filters.search,
                                                    difficultyLevel: 'all',
                                                    lengthRange: 'all',
                                                    timeRange: 'all',
                                                    region: 'all',
                                                });
                                                setOpen(false);
                                            }}
                                            className="bg-[#2B6BE7] hover:bg-[#2B6BE7]/90"
                                        >
                                            {t('filters.resetFilters')}
                                        </Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                {/* Active Filters Display */}
                {(filters.difficultyLevel !== 'all' || filters.lengthRange !== 'all' ||
                    filters.timeRange !== 'all' || filters.region !== 'all') && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {filters.difficultyLevel !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {t(`hikingRoutes.difficulty.${filters.difficultyLevel}`)}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('difficultyLevel', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.lengthRange !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {filters.lengthRange} {t('filters.km')}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('lengthRange', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.timeRange !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {filters.timeRange} {t('filters.hours')}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('timeRange', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.region !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {filters.region}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('region', 'all')}
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

export default TrailFilters;
