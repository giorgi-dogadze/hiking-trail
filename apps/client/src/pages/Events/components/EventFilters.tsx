import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { DifficultyLevel, TripStatus } from '../types';
import { ChevronDown, Filter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useTranslation } from 'react-i18next';
import { DatePicker } from '@/components/ui/date-picker';

export interface EventFilterOptions {
    search: string;
    difficultyLevel: DifficultyLevel | 'all';
    priceRange: string;
    distanceRange: string;
    durationRange: string; // in days
    startDate: Date | null;
    endDate: Date | null;
    status: TripStatus | 'all';
}

interface EventFiltersProps {
    filters: EventFilterOptions;
    onFilterChange: (filters: EventFilterOptions) => void;
}

const EventFilters: React.FC<EventFiltersProps> = ({ filters, onFilterChange }) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange({ ...filters, search: e.target.value });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFilterChange = (key: keyof EventFilterOptions, value: any) => {
        onFilterChange({ ...filters, [key]: value });
    };

    // Price ranges in GEL
    const priceRanges = ['all', '0-500', '500-1000', '1000-2000', '2000+'];

    // Distance ranges in km
    const distanceRanges = ['all', '0-20', '20-50', '50-100', '100+'];

    // Duration ranges in days
    const durationRanges = ['all', '1-2', '3-5', '6-10', '10+'];

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
                            placeholder={t('events.filters.searchPlaceholder')}
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
                                        {t('events.filters.filtersButton')}
                                    </span>
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 p-4" align="end">
                                <div className="space-y-4">
                                    <h4 className="font-medium">{t('events.filters.filterOptions')}</h4>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('events.filters.difficulty')}</label>
                                        <Select
                                            value={filters.difficultyLevel}
                                            onValueChange={(value) => handleFilterChange('difficultyLevel', value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('events.filters.allDifficulties')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">{t('events.filters.allDifficulties')}</SelectItem>
                                                {Object.values(DifficultyLevel).map((level) => (
                                                    <SelectItem key={level} value={level}>
                                                        {t(`events.difficulty.${level}`)}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('events.filters.price')}</label>
                                        <Select
                                            value={filters.priceRange}
                                            onValueChange={(value) => handleFilterChange('priceRange', value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('events.filters.allPrices')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {priceRanges.map((range) => (
                                                    <SelectItem key={range} value={range}>
                                                        {range === 'all'
                                                            ? t('events.filters.allPrices')
                                                            : `${range} ${t('events.filters.gel')}`
                                                        }
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('events.filters.distance')}</label>
                                        <Select
                                            value={filters.distanceRange}
                                            onValueChange={(value) => handleFilterChange('distanceRange', value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('events.filters.allDistances')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {distanceRanges.map((range) => (
                                                    <SelectItem key={range} value={range}>
                                                        {range === 'all'
                                                            ? t('events.filters.allDistances')
                                                            : `${range} ${t('events.filters.km')}`
                                                        }
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('events.filters.duration')}</label>
                                        <Select
                                            value={filters.durationRange}
                                            onValueChange={(value) => handleFilterChange('durationRange', value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('events.filters.allDurations')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {durationRanges.map((range) => (
                                                    <SelectItem key={range} value={range}>
                                                        {range === 'all'
                                                            ? t('events.filters.allDurations')
                                                            : `${range} ${t('events.filters.days')}`
                                                        }
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('events.filters.status')}</label>
                                        <Select
                                            value={filters.status}
                                            onValueChange={(value) => handleFilterChange('status', value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={t('events.filters.allStatuses')} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">{t('events.filters.allStatuses')}</SelectItem>
                                                {Object.values(TripStatus).map((status) => (
                                                    <SelectItem key={status} value={status}>
                                                        {t(`events.status.${status}`)}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">{t('events.filters.dateRange')}</label>
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex items-center">
                                                <Calendar className="mr-2 h-4 w-4" />
                                                <span className="text-sm">{t('events.filters.startDate')}</span>
                                            </div>
                                            <DatePicker
                                                date={filters.startDate}
                                                setDate={(date) => handleFilterChange('startDate', date)}
                                                placeholder={t('events.filters.selectDate')}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-2 mt-2">
                                            <div className="flex items-center">
                                                <Calendar className="mr-2 h-4 w-4" />
                                                <span className="text-sm">{t('events.filters.endDate')}</span>
                                            </div>
                                            <DatePicker
                                                date={filters.endDate}
                                                setDate={(date) => handleFilterChange('endDate', date)}
                                                placeholder={t('events.filters.selectDate')}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-2 flex justify-between">
                                        <div></div>
                                        <Button
                                            size="sm"
                                            onClick={() => {
                                                onFilterChange({
                                                    search: filters.search,
                                                    difficultyLevel: 'all',
                                                    priceRange: 'all',
                                                    distanceRange: 'all',
                                                    durationRange: 'all',
                                                    startDate: null,
                                                    endDate: null,
                                                    status: 'all',
                                                });
                                                setOpen(false);
                                            }}
                                            className="bg-[#2B6BE7] hover:bg-[#2B6BE7]/90"
                                        >
                                            {t('events.filters.resetFilters')}
                                        </Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                {/* Active Filters Display */}
                {(filters.difficultyLevel !== 'all' || filters.priceRange !== 'all' ||
                    filters.distanceRange !== 'all' || filters.durationRange !== 'all' ||
                    filters.status !== 'all' || filters.startDate || filters.endDate) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {filters.difficultyLevel !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {t(`events.difficulty.${filters.difficultyLevel}`)}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('difficultyLevel', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.priceRange !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {filters.priceRange} {t('events.filters.gel')}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('priceRange', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.distanceRange !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {filters.distanceRange} {t('events.filters.km')}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('distanceRange', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.durationRange !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {filters.durationRange} {t('events.filters.days')}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('durationRange', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.status !== 'all' && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {t(`events.status.${filters.status}`)}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('status', 'all')}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.startDate && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {t('events.filters.fromDate')}: {filters.startDate.toLocaleDateString()}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('startDate', null)}
                                    >
                                        ✕
                                    </button>
                                </span>
                            )}
                            {filters.endDate && (
                                <span className="bg-white text-[#2B6BE7] px-2 py-1 rounded-md text-xs flex items-center">
                                    {t('events.filters.toDate')}: {filters.endDate.toLocaleDateString()}
                                    <button
                                        className="ml-1 hover:bg-[#2B6BE7]/80 rounded-full"
                                        onClick={() => handleFilterChange('endDate', null)}
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

export default EventFilters;
