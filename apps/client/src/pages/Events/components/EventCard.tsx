import React from 'react';
import { HikingEvent, DifficultyLevel, TripStatus } from '../types';
import { CalendarDays, Clock, MapPin, Mountain, Users, Calendar, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';
import { enUS, ka } from 'date-fns/locale';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface EventCardProps {
    event: HikingEvent;
    viewMode: 'grid' | 'list';
    onClick: () => void;
}

const difficultyColors: Record<DifficultyLevel, string> = {
    [DifficultyLevel.EASY]: 'bg-green-100 text-green-800',
    [DifficultyLevel.MODERATE]: 'bg-blue-100 text-blue-800',
    [DifficultyLevel.CHALLENGING]: 'bg-yellow-100 text-yellow-800',
    [DifficultyLevel.DIFFICULT]: 'bg-orange-100 text-orange-800',
    [DifficultyLevel.EXTREME]: 'bg-red-100 text-red-800',
};

const statusColors: Record<TripStatus, string> = {
    [TripStatus.UPCOMING]: 'bg-blue-100 text-blue-800',
    [TripStatus.ONGOING]: 'bg-green-100 text-green-800',
    [TripStatus.COMPLETED]: 'bg-gray-100 text-gray-800',
    [TripStatus.CANCELLED]: 'bg-red-100 text-red-800',
};

const EventCard: React.FC<EventCardProps> = ({ event, viewMode, onClick }) => {
    const { t, i18n } = useTranslation();
    // Use the current language from i18n if localStorage is not available yet
    const [language] = useLocalStorage('language', i18n.language || 'ka');

    const locale = language === 'ka' ? ka : enUS;

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
        return new Date(date).toLocaleDateString(language === 'ka' ? 'ka-GE' : 'en-US', options);
    };

    // Calculate how many spots are left
    const spotsLeft = event.maxParticipants - event.currentParticipants;

    // Calculate time until registration deadline
    const timeUntilDeadline = formatDistanceToNow(new Date(event.registrationDeadline), {
        addSuffix: true,
        locale: locale
    });

    // Function to truncate text to a certain length
    const truncateText = (text: string, length: number) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

    if (viewMode === 'grid') {
        return (
            <div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col"
                onClick={onClick}
            >
                {/* Event Image */}
                <div className="relative">
                    <img
                        src={event.images[0]}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                        <Badge className={`${statusColors[event.status]} font-medium`}>
                            {t(`events.status.${event.status}`)}
                        </Badge>
                    </div>
                </div>

                {/* Event Details */}
                <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        {truncateText(event.shortDescription, 100)}
                    </p>

                    <div className="mt-auto space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                            <MapPin size={16} className="mr-2" />
                            {event.location.name}, {event.location.region}
                        </div>

                        <div className="flex items-center text-sm text-gray-500">
                            <CalendarDays size={16} className="mr-2" />
                            {formatDate(event.startDate)} - {formatDate(event.endDate)}
                        </div>

                        <div className="flex items-center text-sm text-gray-500">
                            <Clock size={16} className="mr-2" />
                            {event.duration.days} {t('events.card.days')}
                        </div>

                        <div className="flex justify-between mt-3">
                            <Badge className={`${difficultyColors[event.difficulty]}`}>
                                {t(`events.difficulty.${event.difficulty}`)}
                            </Badge>

                            <div className="text-right">
                                <span className="font-bold text-lg text-blue-600">
                                    {event.price} {event.currency}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer with registration info */}
                <div className="bg-gray-50 p-3 border-t text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Users size={16} className="mr-1" />
                            <span>
                                {spotsLeft > 0
                                    ? t('events.card.spotsLeft', { count: spotsLeft })
                                    : t('events.card.fullyBooked')
                                }
                            </span>
                        </div>
                        <div>
                            <Calendar size={16} className="inline mr-1" />
                            <span className="text-xs">{t('events.card.deadline')}: {timeUntilDeadline}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // List view
    return (
        <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={onClick}
        >
            <div className="flex flex-col md:flex-row">
                {/* Event Image */}
                <div className="md:w-1/3 relative">
                    <img
                        src={event.images[0] || '/images/events/default.jpg'}
                        alt={event.title}
                        className="w-full h-full object-cover md:h-64"
                    />
                    <div className="absolute top-2 right-2">
                        <Badge className={`${statusColors[event.status]} font-medium`}>
                            {t(`events.status.${event.status}`)}
                        </Badge>
                    </div>
                </div>

                {/* Event Details */}
                <div className="md:w-2/3 p-5">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <MapPin size={16} className="mr-2" />
                                {event.location.name}, {event.location.region}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">
                                {event.price} {event.currency}
                            </div>
                            <Badge className={`${difficultyColors[event.difficulty]}`}>
                                {t(`events.difficulty.${event.difficulty}`)}
                            </Badge>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                        {truncateText(event.shortDescription, 200)}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center text-sm">
                            <CalendarDays size={16} className="mr-2 text-blue-500" />
                            <div>
                                <div className="font-semibold">{t('events.card.dates')}</div>
                                <div>{formatDate(event.startDate)} - {formatDate(event.endDate)}</div>
                            </div>
                        </div>

                        <div className="flex items-center text-sm">
                            <Clock size={16} className="mr-2 text-blue-500" />
                            <div>
                                <div className="font-semibold">{t('events.card.duration')}</div>
                                <div>{event.duration.days} {t('events.card.days')}, {event.duration.hours} {t('events.card.hours')}</div>
                            </div>
                        </div>

                        <div className="flex items-center text-sm">
                            <Mountain size={16} className="mr-2 text-blue-500" />
                            <div>
                                <div className="font-semibold">{t('events.card.distance')}</div>
                                <div>{event.distance} {t('events.filters.km')}</div>
                            </div>
                        </div>

                        <div className="flex items-center text-sm">
                            <DollarSign size={16} className="mr-2 text-blue-500" />
                            <div>
                                <div className="font-semibold">{t('events.card.includes')}</div>
                                <div className="flex flex-wrap gap-1">
                                    {event.includesFood && <span className="text-xs bg-gray-100 px-1 rounded">{t('events.card.food')}</span>}
                                    {event.includesAccommodation && <span className="text-xs bg-gray-100 px-1 rounded">{t('events.card.accommodation')}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-2 pt-3 border-t">
                        <div className="flex items-center">
                            <Users size={16} className="mr-1 text-blue-500" />
                            <div>
                                <span className="font-medium">{event.currentParticipants}/{event.maxParticipants}</span> {t('events.card.participants')}
                                {spotsLeft <= 3 && spotsLeft > 0 && (
                                    <span className="ml-2 text-xs text-red-500 font-medium">
                                        {t('events.card.limitedSpots', { count: spotsLeft })}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="text-sm">
                            <Calendar size={16} className="inline mr-1 text-blue-500" />
                            <span className="font-medium">{t('events.card.registerBy')}:</span> {formatDate(event.registrationDeadline)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
