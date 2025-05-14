import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { enUS, ka } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Calendar, Clock, AlertTriangle, Check } from 'lucide-react';
import { TripStatus } from '../types';

interface EventRegistrationCardProps {
    price: number;
    currency: string;
    startDate: Date;
    endDate: Date;
    deadline: Date;
    maxParticipants: number;
    currentParticipants: number;
    earlyBirdDiscount?: { percentage: number; until: Date };
    groupDiscount?: { percentage: number; minPeople: number };
    status: TripStatus;
}

const EventRegistrationCard: React.FC<EventRegistrationCardProps> = ({
    price,
    currency,
    startDate,
    endDate,
    deadline,
    maxParticipants,
    currentParticipants,
    earlyBirdDiscount,
    groupDiscount,
    status
}) => {
    const { t, i18n } = useTranslation();
    const locale = i18n.language === 'ka' ? ka : enUS;

    const formatDate = (date: Date) => {
        return format(date, 'PP', { locale });
    };

    const spotsLeft = maxParticipants - currentParticipants;
    const isLimitedSpots = spotsLeft <= 5 && spotsLeft > 0;
    const isSoldOut = spotsLeft === 0;

    const isEarlyBird = earlyBirdDiscount && new Date() < earlyBirdDiscount.until;
    const earlyBirdPrice = isEarlyBird ? price * (1 - earlyBirdDiscount!.percentage / 100) : null;

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Price header */}
            <div className="bg-blue-600 text-white p-5 text-center">
                <div className="text-sm uppercase font-medium mb-1">
                    {t('events.card.registerBy')}: {formatDate(deadline)}
                </div>
                <div className="flex items-center justify-center text-3xl font-bold">
                    {isEarlyBird && (
                        <>
                            <span className="line-through text-blue-200 mr-2">{price}</span>
                            {earlyBirdPrice}
                        </>
                    )}
                    {!isEarlyBird && price} {currency}
                </div>
                {isEarlyBird && (
                    <Badge className="bg-yellow-500 mt-2">
                        {t('events.earlyBird')} - {t('events.save')} {earlyBirdDiscount?.percentage}%
                    </Badge>
                )}
            </div>

            {/* Registration info */}
            <div className="p-5">
                {/* Status notification */}
                {status === TripStatus.COMPLETED && (
                    <div className="mb-4 bg-gray-100 text-gray-700 p-3 rounded-lg text-sm flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        {t('events.eventCompleted')}
                    </div>
                )}
                {status === TripStatus.ONGOING && (
                    <div className="mb-4 bg-green-100 text-green-700 p-3 rounded-lg text-sm flex items-center">
                        <Check className="h-4 w-4 mr-2" />
                        {t('events.eventOngoing')}
                    </div>
                )}
                {status === TripStatus.CANCELLED && (
                    <div className="mb-4 bg-red-100 text-red-700 p-3 rounded-lg text-sm flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        {t('events.eventCancelled')}
                    </div>
                )}

                {/* Trip details */}
                <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                            <span className="text-gray-600">{t('events.card.dates')}</span>
                        </div>
                        <div className="text-right font-medium">
                            {formatDate(startDate)} - {formatDate(endDate)}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Clock className="h-5 w-5 text-blue-500 mr-2" />
                            <span className="text-gray-600">{t('events.card.deadline')}</span>
                        </div>
                        <div className="text-right font-medium">
                            {formatDate(deadline)}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <Users className="h-5 w-5 text-blue-500 mr-2" />
                            <span className="text-gray-600">{t('events.participants')}</span>
                        </div>
                        <div className="text-right font-medium">
                            {currentParticipants}/{maxParticipants}
                        </div>
                    </div>
                </div>

                {/* Availability indicators */}
                <div className="mb-4">
                    {!isSoldOut && (
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                            <div
                                className={`h-full ${isLimitedSpots ? 'bg-red-500' : 'bg-green-500'}`}
                                style={{ width: `${(currentParticipants / maxParticipants) * 100}%` }}
                            ></div>
                        </div>
                    )}

                    <div className="text-center">
                        {isSoldOut ? (
                            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                {t('events.card.fullyBooked')}
                            </Badge>
                        ) : isLimitedSpots ? (
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                {t('events.card.limitedSpots', { count: spotsLeft })}
                            </Badge>
                        ) : (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {t('events.card.spotsLeft', { count: spotsLeft })}
                            </Badge>
                        )}
                    </div>
                </div>

                {/* Group discount */}
                {groupDiscount && (
                    <div className="bg-blue-50 p-3 rounded-lg mb-4">
                        <div className="font-medium mb-1 text-blue-700">
                            {t('events.groupDiscount')}
                        </div>
                        <p className="text-sm text-blue-600">
                            {t('events.groupDiscountDescription', {
                                percentage: groupDiscount.percentage,
                                people: groupDiscount.minPeople
                            })}
                        </p>
                    </div>
                )}

                {/* Registration button */}
                <Button
                    className="w-full py-6"
                    disabled={isSoldOut || status !== TripStatus.UPCOMING}
                >
                    {t('events.registerNow')}
                </Button>
            </div>
        </div>
    );
};

export default EventRegistrationCard;
